class User < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :task_comments, dependent: :destroy
  has_secure_password
end
