class SessionsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_params


  def create
    user = User.find_by(email: params[:email])
    user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
  end

  def destroy
    user = User.find_by(email: params[:email])
    user.destroy
    session[:user_id] = nil
    head :no_content
  end
  private
  def invalid_params(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end


end
