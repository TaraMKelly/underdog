class UserPick < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :team_picked, presence: true, uniqueness: true
  validates :over_under, presence: true, uniqueness: true
end
