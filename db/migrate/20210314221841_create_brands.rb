class CreateBrands < ActiveRecord::Migration[6.1]
  def change
    create_table :brands do |t|
      t.string :name
      t.string :logo_url
      t.string :about_url

      t.timestamps
    end
  end
end
