# frozen_string_literal: true

json.games do
  json.array! @games do |game|
    json.extract! game, :id, :bet_amount, :profit, :bs
    json.set! :dices, game.dices
    json.set! :time, game.created_at.strftime("%Y-%m-%d %H:%M:%S")
  end
end
