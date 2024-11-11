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

ActiveRecord::Schema[7.1].define(version: 2024_11_11_023928) do
  create_table "bet_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "code"
    t.decimal "base_odds", precision: 5, scale: 2
    t.boolean "multiple_dice_amount", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "games", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "user_id"
    t.integer "bet_amount", default: 0
    t.integer "reward", default: 0
    t.integer "dice1", limit: 1
    t.integer "dice2", limit: 1
    t.integer "dice3", limit: 1
    t.datetime "created_at"
  end

  create_table "placed_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "bet_item_id", null: false
    t.integer "bet_amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bet_item_id"], name: "index_placed_items_on_bet_item_id"
    t.index ["game_id"], name: "index_placed_items_on_game_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.integer "balance", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "placed_items", "bet_items"
  add_foreign_key "placed_items", "games"
end
