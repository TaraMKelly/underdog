class CommentSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :user_id, :comment
end
