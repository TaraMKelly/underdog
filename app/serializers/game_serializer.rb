class GameSerializer < ActiveModel::Serializer
  attributes :id, :home_name, :away_name
end
