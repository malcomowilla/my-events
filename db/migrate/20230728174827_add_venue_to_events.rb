class AddVenueToEvents < ActiveRecord::Migration[6.0]
  def up
    add_reference :events, :venue, foreign_key: true, default: 1 # You can change the default value as needed.
  end

  def down
    remove_reference :events, :venue, foreign_key: true
  end
end



class AddVenueToEvents < ActiveRecord::Migration[6.0]
  def up
    add_reference :events, :venue, foreign_key: true, null: true
  end

  def down
    remove_reference :events, :venue, foreign_key: true
  end
end





