class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :contact_number, :image
  has_many :events
end
