class Ticket < ApplicationRecord

  
    # Validations
    validates :price, numericality: { greater_than_or_equal_to: 0 }
  
  
   # belongs_to :user
    belongs_to :event
    has_one :attendee
    has_many :booked_tickets
end

