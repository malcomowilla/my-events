class Ticket < ApplicationRecord

    belongs_to :event
  
    # Validations
    validates :name, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }
    validates :event_id, presence: true
  
  
   # belongs_to :user
    belongs_to :event
    has_one :attendee
    has_many :booked_tickets
end

