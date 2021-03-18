class CreateVitaminAmountPerSupplements < ActiveRecord::Migration[6.1]
  def change
    create_table :vitamin_amount_per_supplements do |t|
      t.references :supplement, null: false, foreign_key: true
      t.references :vitamin, null: false, foreign_key: true
      t.integer :weight
      t.string :units

    end
  end
end
