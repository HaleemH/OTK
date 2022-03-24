class RemoveVendorFromTask < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :vendor_id
  end
end
