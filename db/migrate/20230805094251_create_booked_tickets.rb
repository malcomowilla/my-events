class CreateBookedTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :booked_tickets do |t|
      t.integer :user_id
      t.integer :ticket_id
      t.timestamps
    end
  end
end
