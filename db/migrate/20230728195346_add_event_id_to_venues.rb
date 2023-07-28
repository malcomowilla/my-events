class AddEventIdToVenues < ActiveRecord::Migration[7.0]
  def change
    add_reference :venues, :event, null: false, foreign_key: true
  end
end
