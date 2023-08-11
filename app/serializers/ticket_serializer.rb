class TicketSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :ticket_type, :price, :purchased_date, :image
   #belongs_to :user
   belongs_to :event
end
