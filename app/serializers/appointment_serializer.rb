class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_reason, :start_time, :end_time, :notes, :user_id, :pet_id
  
  belongs_to :user
  belongs_to :pet
end
