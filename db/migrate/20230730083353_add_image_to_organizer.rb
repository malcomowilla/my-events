class AddImageToOrganizer < ActiveRecord::Migration[7.0]
  def change
    add_column :organizers, :image, :string
  end
end
