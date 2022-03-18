class User < ApplicationRecord
    has_many :comments
    has_many :tasks
    has_many :vendors, through: :task
    has_secure_password
end
