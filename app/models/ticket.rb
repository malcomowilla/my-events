class Ticket < ApplicationRecord
<<<<<<< HEAD
    belongs_to :event
  
    # Validations
    validates :name, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }
    validates :event_id, presence: true
  end
  
=======
   # belongs_to :user
    belongs_to :event
    has_one :attendee
    has_many :booked_tickets
end
>>>>>>> e26ee1632b497caf8f6d1ab5d802c5ada2481571
