class TaskCommentsController < ApplicationController
  before_action :set_task_comment, only: [:show, :update, :destroy]

  # GET /task_comments
  def index
    @task_comments = TaskComment.all

    render json: @task_comments
  end

  # GET /task_comments/1
  def show
    task= TaskComment.where(task_id: params[:id])
    render json: task, status: :ok
  end

  # POST /task_comments
  def create
    comment = TaskComment.create!(task_comment_params)
    render json: comment, status: :created
    
  end

  # PATCH/PUT /task_comments/1
  def update
    if @task_comment.update(task_comment_params)
      render json: @task_comment
    else
      render json: @task_comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /task_comments/1
  def destroy
    @task_comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task_comment
      @task_comment = TaskComment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_comment_params
      params.permit(:comment, :user_id, :task_id)
    end
end
