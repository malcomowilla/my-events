class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :date, :description, :location, :organizer_id
belongs_to :organizer
    has_one :ticket

end
