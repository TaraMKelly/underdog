class GameSerializer < ActiveModel::Serializer
  attributes :id, :away_team, :home_team, :away_ml, :home_ml, :away_spread, :home_spread, :away_price, :home_price
  has_many :comments
end
