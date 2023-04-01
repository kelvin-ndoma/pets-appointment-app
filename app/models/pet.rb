class Pet < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    
    validates :name, presence: true
    validates :breed, presence: true
    validates :age, presence: true
  end
  
