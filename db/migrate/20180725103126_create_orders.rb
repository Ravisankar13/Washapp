class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :firstname
      t.string :lastname
      t.string :sub_total
      t.string :decimal

      t.timestamps
    end
  end
end
