# frozen_string_literal: true

json.game do
  json.extract! @game, *[:id, :dice1, :dice2, :dice3, :bet_amount, :reward, :bs]
  json.number @game.number
  json.dices @game.dices
  json.profit @game.profit
end

json.placed_items do
  json.array! @game.placed_items, *[:bet_amount, :bet_item_code]
end

json.won_items do
  json.array! @game.won_items, *[:reward, :code]
end

json.user do
  json.extract! @game.user, :balance
end
