class UserPickSerializer < ActiveModel::Serializer
  attributes :id, :game_date, :over, :under, :team_picked
  has_one :user
end
