class GameSerializer < ActiveModel::Serializer
  attributes :id, :home_name, :away_name, :home_price, :away_price, :over_under
end
