class UsersController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_params

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private

  #errors
  def invalid_params(invalid)
    render json: {errors: invalid.record.errors.full_messages},
           status: :unprocessable_entity
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(
      :email,
      :first_name,
      :last_name,
      :username,
      :password,
      :password_confirmation,
    )
  end
end
