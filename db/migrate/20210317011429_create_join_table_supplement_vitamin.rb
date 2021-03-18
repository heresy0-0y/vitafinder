class CreateJoinTableSupplementVitamin < ActiveRecord::Migration[6.1]
  def change
    create_join_table :supplements, :vitamins do |t|

      t.timestamps
    end 
  end
end
