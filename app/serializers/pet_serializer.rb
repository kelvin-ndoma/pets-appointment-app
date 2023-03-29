class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :image, :medical_history, :age, :description, :user_id
end
