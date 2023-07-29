class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :contact_number
  has_many :events
end
