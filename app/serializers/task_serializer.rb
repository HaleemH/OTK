class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :due_by
  has_one :user
  has_one :vendor
end
