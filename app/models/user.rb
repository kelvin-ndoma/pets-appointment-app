class User < ApplicationRecord
    has_many :appointments
    has_many :pets, through: :appointments
    
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    has_secure_password
  end
  