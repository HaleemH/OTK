class User < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :task_comments, dependent: :destroy
  has_secure_password

  # Validations
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :password, presence: true
  validates :username, presence: true
  validates :username, uniqueness: true
end
