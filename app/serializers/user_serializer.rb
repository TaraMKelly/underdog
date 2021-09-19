class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :location, :profile_picture
end
