class CreateNooforders < ActiveRecord::Migration[5.0]
  def change
    create_table :nooforders do |t|
      t.integer :quantity

      t.timestamps
    end
  end
end
