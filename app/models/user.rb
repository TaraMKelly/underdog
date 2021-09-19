class User < ApplicationRecord
    has_many :comments
    has_many :games, through: :comments
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
