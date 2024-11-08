# frozen_string_literal: true

module Api
  class GamesController < ApiController
    around_action :handle_crucial_exceptions, only: :create
    def create
      cup = Cup.roll
      user = current_user
      @game = Game.new(
        user: user,
        dice1: cup.dices[0],
        dice2: cup.dices[1],
        dice3: cup.dices[2],
      )

      placed_items = (game_params[:place_items] || []).map do |item|
        {
          bet_amount: item[:bet_amount],
          bet_item: BetItem.find_by(code: item[:bet_item_code]),
        }
      end

      @game.placed_items_attributes = placed_items
      if @game.placed_items.present?
        @game.reward = @game.placed_items.sum { |item| item.reward(cup) }
        @game.bet_amount = @game.placed_items.sum(&:bet_amount)
      end

      user.update!(balance: user.balance - @game.bet_amount + @game.reward)

      if @game.save
        render :show
      else
        render json: { errors: "建立失敗" }, status: :internal_server_error
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
