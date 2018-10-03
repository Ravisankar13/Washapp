class AddServiceIdToServices < ActiveRecord::Migration[5.0]
  def change
  	add_column :services, :serviceid, :integer
  end
end
