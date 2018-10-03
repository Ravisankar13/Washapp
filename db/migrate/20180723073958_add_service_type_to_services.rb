class AddServiceTypeToServices < ActiveRecord::Migration[5.0]
  def change
    add_column :services, :ServiceType, :string
    add_column :services, :string, :string
  end
end
