class AddServiceIdToWashandfold < ActiveRecord::Migration[5.0]
  def change
    add_column :washandfolds, :service_id, :integer
  end
end
