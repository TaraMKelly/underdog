class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :location
  has_many :comments
  has_many :user_picks
end

