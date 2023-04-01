class PetWithoutAppointmentsSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :name, :breed, :age, :description
end

