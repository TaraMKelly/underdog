class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :game_id, :who_wrote_comment 
  has_one :game
  has_one :user
end
