# frozen_string_literal: true

module Api
  class GamesController < ApplicationController
    # params{ game: { bet_amount: 100, place_items_attributes: [{ bet_amount: 50, code: 'bs01' }, { bet_amount: 50, code: 'tp00' }] }
    def create
      cup = Cup.roll
      game = Game.new(
        user: current_user,
        dice1: cup.dices[0],
        dice2: cup.dices[1],
        dice3: cup.dices[2],
      )

      placed_items = game_params[:place_items].map do |item|
        {
          bet_amount: item[:bet_amount],
          bet_item: BetItem.find_by(code: item[:bet_item_code]),
        }
      end

      game.reward = game.placed_items.sum { |item| item.reword(cup) }
      game.bet_amount = game.placed_items.sum(&:bet_amount)
      game.placed_items_attributes = placed_items

      if game.save
        render json: { id: game.id }, status: :created
      else
        render json: { errors: "建立失敗" }, status: 500
      end
    end

    def game_params
      params.permit(place_items: [:bet_amount, :bet_item_code])
    end

    def current_user
      User.last
    end
  end
end
