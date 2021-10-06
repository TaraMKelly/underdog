class UserPick < ApplicationRecord
  belongs_to :user

  validates :team_picked, presence: true, uniqueness: true
  validates :over, presence: true, uniqueness: true
  validates :under, presence: true, uniqueness: true
end
