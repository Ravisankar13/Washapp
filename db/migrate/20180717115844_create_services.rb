class CreateServices < ActiveRecord::Migration[5.0]
  def change
    create_table :services do |t|
      t.string :servicetype
      t.integer :price
      t.string :name

      t.timestamps
    end
  end
end
