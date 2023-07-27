class CreateAttendees < ActiveRecord::Migration[7.0]
  def change
    create_table :attendees do |t|
      t.string :event_id
      t.string :user_id
      t.string :registration_date

      t.timestamps
    end
  end
end
