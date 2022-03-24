class RemoveVendorFromTaskMessages < ActiveRecord::Migration[6.1]
  def change
    remove_column :task_comments, :vendor_id
  end
end
