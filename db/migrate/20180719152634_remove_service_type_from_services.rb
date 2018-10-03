class RemoveServiceTypeFromServices < ActiveRecord::Migration[5.0]
  def change
  	remove_column :services, :servicetype
  end
end
