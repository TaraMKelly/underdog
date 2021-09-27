class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :game
  has_one :user
end
