class AddEmailToVendor < ActiveRecord::Migration[6.1]
  def change
    add_column :vendors, :email, :string
  end
end
