class Appointment < ApplicationRecord
    belongs_to :pet
    belongs_to :user
  
    validates :start_time, presence: true
    validates :appointment_reason, presence: true
    validates :pet, presence: true
    validates :user, presence: true
    
end
