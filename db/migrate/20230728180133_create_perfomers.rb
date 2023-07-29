class CreatePerfomers < ActiveRecord::Migration[7.0]
  def change
    create_table :perfomers do |t|
      t.string :name
      t.string :type
      t.string :image_url
      t.boolean :has_upcoming_events
      t.integer :event_id

      t.timestamps
    end
  end
end
