class AddNameAndMrnToUser < ActiveRecord::Migration
  def change
  	change_table :users do |t|
  		t.string :first_name, :last_name, :mrn
  	end
  end
end
