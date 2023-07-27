class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :image_url
      t.date :date
      t.string :description
      t.string :location
      t.string :organizer_id

      t.timestamps
    end
  end
end
