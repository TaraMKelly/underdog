class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_date, :away_team, :home_team, :away_ml, :home_ml, :away_spread, :home_spread, :away_price, :home_price, :over_under, :formatted_date
  has_many :comments
  has_many :users, through: :comments
end
