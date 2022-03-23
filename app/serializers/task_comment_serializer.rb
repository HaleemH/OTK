class TaskCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :due_by, :city
  has_one :user
  has_one :task
  has_many :task_comments
end
