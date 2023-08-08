class Organizer < ApplicationRecord
    has_many :events
    has_secure_password
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
    validates :name, uniqueness: {case_sensitive: false}
    #validates :contact_number, presence: true, format: { with: /\A\d{10}\z/, message: "should be a 10-digit number" }
end
