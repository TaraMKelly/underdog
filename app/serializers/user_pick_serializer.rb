class UserPickSerializer < ActiveModel::Serializer
  attributes :id, :game_date, :over_under, :team_picked
  has_one :user
  has_one :game
end
