class CreateAttendees < ActiveRecord::Migration[7.0]
  def change
    create_table :attendees do |t|
      t.string :title
      t.date :date
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
