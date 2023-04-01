class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  
  has_many :appointments
  has_many :pets, through: :appointments
end
