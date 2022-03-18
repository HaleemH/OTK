class SessionsController < ApplicationController


  def create
    user = User.find_by(email: params[:email])
    user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'Invalid Username or Password' }, status: :forbidden
    end
  end

  def destroy
    user = User.find_by(email: params[:email])
    user.destroy
    session[:user_id] = nil
    head :no_content
  end

end
