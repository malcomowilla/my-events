class TicketSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :user_id, :ticket_type, :price, :purchased_date
end
