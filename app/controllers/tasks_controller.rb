class TasksController < ApplicationController
    
    def index
        task= Task.all
        render json: task, status: :ok
    end
    
    def show
        task= Task.find(params[:id])
        render json: task, status: :ok
    end

    def create
        newTask= Task.create!(task_params)
        render json: newTask, status: :created
    end

    private

    def task_params
        params.permit(:description, :due_by, :city, :user_id,:vendor_id)
    end
end
