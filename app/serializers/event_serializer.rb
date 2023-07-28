class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :date, :description, :location, :organizer_id
      has_many :perfomers

end
