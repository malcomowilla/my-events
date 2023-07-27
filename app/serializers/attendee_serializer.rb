class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :user_id, :registration_date
end
