class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :comments
end
