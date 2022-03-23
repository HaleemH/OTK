class TaskCommentsController < ApplicationController
  before_action :set_task_comment, only: [:show, :update, :destroy]

  # GET /task_comments
  def index
    @task_comments = TaskComment.all

    render json: @task_comments
  end

  # GET /task_comments/1
  def show
    render json: @task_comment
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
      params.require(:task_comment).permit(:comment, :user_id, :task_id, :vend)
    end
end
