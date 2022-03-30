class TasksController < ApplicationController
  def index
    task = Task.all
    render json: task, status: :ok
  end

  def show
    task = Task.where(user_id: params[:id])
    render json: task, status: :ok
  end
  def profile
    task = Task.where(user_id: params[:id])    
    render json: task, serialier: UserWithTaskAndCommentSerializer, status: :ok
  end
  def create
    newTask = Task.create!(task_params)
    render json: newTask, status: :created
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)
    render json: task, status: :ok
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    head :no_content
  end

  private

  def task_params
    params.permit(:description, :due_by, :city, :user_id)
  end

end
