class Ticket < ApplicationRecord

    belongs_to :event
  
    # Validations
    validates :price, numericality: { greater_than_or_equal_to: 0 }
  
  
=======
    validates :event_id, presence: true
  
  

  
    # Validations  
  
   # belongs_to :user
    has_one :attendee
    has_many :booked_tickets
end

