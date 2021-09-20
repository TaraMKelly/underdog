class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :location, :profile_picture
  has_many :comments
  has_many :games
end
