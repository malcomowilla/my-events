class AddPasswordDigestToOrganizers < ActiveRecord::Migration[7.0]
  def change
    add_column :organizers, :password_digest, :string
  end
end
