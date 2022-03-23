class TaskComment < ApplicationRecord
  belongs_to :user
  belongs_to :task
  belongs_to :vendor
end
