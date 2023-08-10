class Attendee < ApplicationRecord
    belongs_to :user
<<<<<<< HEAD
    belongs_to :event
  
    validates_uniqueness_of :user_id ,:event_id
end
=======
    belongs_to  :event
end
>>>>>>> e26ee1632b497caf8f6d1ab5d802c5ada2481571
