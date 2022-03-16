class CreateVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :address
      t.string :website
      t.string :social
      t.text :menu
      t.text :services
      t.string :phone
      t.integer :rating

      t.timestamps
    end
  end
end
