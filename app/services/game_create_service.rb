# frozen_string_literal: true

class GameCreateService < BaseService

  attr_reader :game

  def initialize(user, placed_items_params:, cup: Cup.roll)
    @user = user
    @placed_items_params = placed_items_params
    @cup = cup

    @game = Game.new(user: user)
    @game.cup = @cup
  end

  def perform
    invalid_item_code = @placed_items_params.any? do |item|
      BetItem.find_by(code: item[:bet_item_code]).nil?
    end

    if invalid_item_code
      errors.add(:base, "下注項目不存在！")
      return false
    end

    @game.placed_items_attributes = @placed_items_params.map do |item|
      {
        bet_amount: item[:bet_amount],
        bet_item: BetItem.find_by(code: item[:bet_item_code]),
      }
    end

    @game.calculate_profit
    @game.trade!
  end

end
