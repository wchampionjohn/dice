# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
[
  { code: "bs01", base_odds: 2.0 },
  { code: "bs02", base_odds: 2.0 },
  { code: "db01", base_odds: 11.0 },
  { code: "db02", base_odds: 11.0 },
  { code: "db03", base_odds: 11.0 },
  { code: "db04", base_odds: 11.0 },
  { code: "db05", base_odds: 11.0 },
  { code: "db06", base_odds: 11.0 },
  { code: "tp01", base_odds: 180.0 },
  { code: "tp02", base_odds: 180.0 },
  { code: "tp03", base_odds: 180.0 },
  { code: "tp04", base_odds: 180.0 },
  { code: "tp05", base_odds: 180.0 },
  { code: "tp06", base_odds: 180.0 },
  { code: "tp00", base_odds: 30.0 },
  { code: "nb04", base_odds: 60.0 },
  { code: "nb05", base_odds: 20.0 },
  { code: "nb06", base_odds: 18.0 },
  { code: "nb07", base_odds: 12.0 },
  { code: "nb08", base_odds: 8.0 },
  { code: "nb09", base_odds: 6.0 },
  { code: "nb10", base_odds: 6.0 },
  { code: "nb11", base_odds: 6.0 },
  { code: "nb12", base_odds: 6.0 },
  { code: "nb13", base_odds: 8.0 },
  { code: "nb14", base_odds: 12.0 },
  { code: "nb15", base_odds: 18.0 },
  { code: "nb16", base_odds: 20.0 },
  { code: "nb17", base_odds: 60.0 },
  { code: "td12", base_odds: 6.0 },
  { code: "td13", base_odds: 6.0 },
  { code: "td14", base_odds: 6.0 },
  { code: "td15", base_odds: 6.0 },
  { code: "td16", base_odds: 6.0 },
  { code: "td23", base_odds: 6.0 },
  { code: "td24", base_odds: 6.0 },
  { code: "td25", base_odds: 6.0 },
  { code: "td26", base_odds: 6.0 },
  { code: "td34", base_odds: 6.0 },
  { code: "td35", base_odds: 6.0 },
  { code: "td36", base_odds: 6.0 },
  { code: "td45", base_odds: 6.0 },
  { code: "td46", base_odds: 6.0 },
  { code: "td56", base_odds: 6.0 },
  { code: "sg01", base_odds: 2.0 },
  { code: "sg02", base_odds: 2.0 },
  { code: "sg03", base_odds: 2.0 },
  { code: "sg04", base_odds: 2.0 },
  { code: "sg05", base_odds: 2.0 },
  { code: "sg06", base_odds: 2.0 },
].each do |bet_item|
  item = BetItem.find_or_initialize_by(code: bet_item[:code])
  item.update!(base_odds: bet_item[:base_odds])
end
