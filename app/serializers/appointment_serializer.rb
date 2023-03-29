class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_reason, :user_id, :pet_id
  belongs_to :pet
end
