class Attendee < ApplicationRecord
    belongs_to :user

    belongs_to :event
  
    validates_uniqueness_of :user_id ,:event_id



end

