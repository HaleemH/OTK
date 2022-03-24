class TaskCommentsController < ApplicationController
  # GET /task_comments/1
  def show
    task = TaskComment.where(task_id: params[:id])
    render json: task, status: :ok
  end

  # POST /task_comments
  def create
    comment = TaskComment.create!(task_comment_params)
    render json: comment, status: :created
  end

  private

  # Only allow a list of trusted parameters through.
  def task_comment_params
    params.permit(:comment, :user_id, :task_id)
  end
end
