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
  { code: "bs01", odds: 2.0 },
  { code: "bs02", odds: 2.0 },
  { code: "db01", odds: 11.0 },
  { code: "db02", odds: 11.0 },
  { code: "db03", odds: 11.0 },
  { code: "db04", odds: 11.0 },
  { code: "db05", odds: 11.0 },
  { code: "db06", odds: 11.0 },
  { code: "tp01", odds: 180.0 },
  { code: "tp02", odds: 180.0 },
  { code: "tp03", odds: 180.0 },
  { code: "tp04", odds: 180.0 },
  { code: "tp05", odds: 180.0 },
  { code: "tp06", odds: 180.0 },
  { code: "tp00", odds: 30.0 },
  { code: "nb04", odds: 60.0 },
  { code: "nb05", odds: 20.0 },
  { code: "nb06", odds: 18.0 },
  { code: "nb07", odds: 12.0 },
  { code: "nb08", odds: 8.0 },
  { code: "nb09", odds: 6.0 },
  { code: "nb10", odds: 6.0 },
  { code: "nb11", odds: 6.0 },
  { code: "nb12", odds: 6.0 },
  { code: "nb13", odds: 8.0 },
  { code: "nb14", odds: 12.0 },
  { code: "nb15", odds: 18.0 },
  { code: "nb16", odds: 20.0 },
  { code: "nb17", odds: 60.0 },
  { code: "td12", odds: 6.0 },
  { code: "td13", odds: 6.0 },
  { code: "td14", odds: 6.0 },
  { code: "td15", odds: 6.0 },
  { code: "td16", odds: 6.0 },
  { code: "td23", odds: 6.0 },
  { code: "td24", odds: 6.0 },
  { code: "td25", odds: 6.0 },
  { code: "td26", odds: 6.0 },
  { code: "td34", odds: 6.0 },
  { code: "td35", odds: 6.0 },
  { code: "td36", odds: 6.0 },
  { code: "td45", odds: 6.0 },
  { code: "td46", odds: 6.0 },
  { code: "td56", odds: 6.0 },
  { code: "sg01", odds: 2.0 },
  { code: "sg02", odds: 2.0 },
  { code: "sg03", odds: 2.0 },
  { code: "sg04", odds: 2.0 },
  { code: "sg05", odds: 2.0 },
  { code: "sg06", odds: 2.0 },
  { code: "od01", odds: 2.0 },
  { code: "od02", odds: 2.0 },
  { code: "od03", odds: 2.0 },
].each do |bet_item|
  item = BetItem.find_or_initialize_by(code: bet_item[:code])
  item.update!(odds: bet_item[:odds])
end
