class BookedTicket < ApplicationRecord
    belongs_to :ticket
    belongs_to :user
end