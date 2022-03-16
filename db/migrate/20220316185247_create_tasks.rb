class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.text :description
      t.string :due_by
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :vendor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
