class AddCityColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :city, :string
  end
end
