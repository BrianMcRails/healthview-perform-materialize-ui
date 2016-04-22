class CreateCounters < ActiveRecord::Migration
  def change
    create_table :counters do |t|
      t.integer :user_id
      t.string :counter_title

      t.timestamps null: false
    end
  end
end
