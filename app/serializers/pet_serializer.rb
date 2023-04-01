class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :medical_history, :age, :image, :description

  has_many :appointments
end
