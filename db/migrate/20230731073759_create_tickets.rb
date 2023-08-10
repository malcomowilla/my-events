class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :title
      t.date :date
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
