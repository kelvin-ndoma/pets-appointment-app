class Appointment < ApplicationRecord
    belongs_to :user
    belongs_to :pet
    
    validates :appointment_reason, presence: true
    validates :start_time, presence: true
    validates :user_id, presence: true
    validates :pet_id, presence: true
  end
  