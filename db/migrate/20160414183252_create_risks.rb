class CreateRisks < ActiveRecord::Migration
  def change
    create_table :risks do |t|
      t.integer :user_id
      t.string :risk_score_title
      t.integer :risk_score

      t.timestamps null: false
    end
  end
end
