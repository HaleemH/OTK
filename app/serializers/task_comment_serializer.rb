class TaskCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :user
  has_one :task
end
