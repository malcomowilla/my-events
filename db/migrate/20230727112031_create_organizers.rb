class CreateOrganizers < ActiveRecord::Migration[7.0]
  def change
    create_table :organizers do |t|
      t.string :name
      t.string :email
      t.string :contact_number

      t.timestamps
    end
  end
end
