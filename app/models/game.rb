class Game < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments
end
