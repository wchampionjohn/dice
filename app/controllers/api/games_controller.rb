# frozen_string_literal: true

module Api
  class GamesController < ApiController
    around_action :handle_crucial_exceptions, only: :create

    def create
      service = GameCreateService.new(current_user, placed_items_params: game_params[:placed_items])
      if service.perform
        @game = service.game
        render :show
      else
        render json: { errors: "建立失敗" }, status: :internal_server_error
      end
    end

    def index
      @games = Game.order(created_at: :desc).limit(10)
    end

    def game_params
      params.permit(placed_items: [:bet_amount, :bet_item_code])
    end

    def current_user
      @user ||= User.find_by("balance > 0") || (User.create!(balance: 1000) && User.last)
    end
  end
end
