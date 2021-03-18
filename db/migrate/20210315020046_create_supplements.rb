class CreateSupplements < ActiveRecord::Migration[6.1]
  def change
    create_table :supplements do |t|
      t.string :name
      t.integer :price
      t.string :image_url
      t.string :retail_url
      t.string :nutrition_label_url
      t.references :brand, null: false, foreign_key: true

      t.timestamps
    end
  end
end
