class AddPreferenceToUser < ActiveRecord::Migration
  def change
  	change_table :users do |t|
  		t.boolean :checklist, :risk, :counter
  	end
  end
end
