class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :games, through: :comments
    has_many :user_picks

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
