# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_17_221538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.string "logo_url"
    t.string "about_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "supplements", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "image_url"
    t.string "retail_url"
    t.string "nutrition_label_url"
    t.bigint "brand_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["brand_id"], name: "index_supplements_on_brand_id"
  end

  create_table "supplements_vitamins", id: false, force: :cascade do |t|
    t.bigint "supplement_id", null: false
    t.bigint "vitamin_id", null: false
    t.integer "weight"
    t.string "units"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vitamin_amount_per_supplements", force: :cascade do |t|
    t.bigint "supplement_id", null: false
    t.bigint "vitamin_id", null: false
    t.integer "weight"
    t.string "units"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["supplement_id"], name: "index_vitamin_amount_per_supplements_on_supplement_id"
    t.index ["vitamin_id"], name: "index_vitamin_amount_per_supplements_on_vitamin_id"
  end

  create_table "vitamins", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "supplements", "brands"
  add_foreign_key "vitamin_amount_per_supplements", "supplements"
  add_foreign_key "vitamin_amount_per_supplements", "vitamins"
end
