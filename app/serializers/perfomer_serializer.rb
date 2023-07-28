class PerfomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :image_url, :has_upcoming_events, :event_id
  belongs_to :event
end
