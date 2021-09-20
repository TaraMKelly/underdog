class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :comments
  belongs_to :game
  belongs_to :user
end
