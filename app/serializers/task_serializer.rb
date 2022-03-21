class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :due_by, :city
  has_one :user
  has_one :vendor
end
