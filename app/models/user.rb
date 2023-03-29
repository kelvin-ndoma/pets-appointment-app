class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    
    has_many :pets
    has_many :appointments, through: :pets
end
