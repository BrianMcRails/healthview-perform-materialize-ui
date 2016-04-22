class CreatePreChecks < ActiveRecord::Migration
  def change
    create_table :pre_checks do |t|
      t.integer :user_id
      t.string :check_name
      t.boolean :check_status

      t.timestamps null: false
    end
  end
end
