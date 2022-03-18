class AddImagesToVendor < ActiveRecord::Migration[6.1]
  def change
    add_column :vendors, :img, :string
  end
end
