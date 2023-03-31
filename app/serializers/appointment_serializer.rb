class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_reason, :notes, :start_time, :end_time
  belongs_to :pet
end
