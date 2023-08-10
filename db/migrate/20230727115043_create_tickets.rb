class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :event_id
      t.string :user_id
      t.string :ticket_type
      t.integer :price
      t.string :purchased_date

      t.timestamps
    end
  end
end
