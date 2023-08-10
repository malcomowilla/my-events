class RemoveUserIdFromTickets < ActiveRecord::Migration[7.0]
  def change
    remove_column :tickets, :user_id
  end
end
