# frozen_string_literal: true

module Api
  class GamesController < ApiController
    around_action :handle_crucial_exceptions, only: :create

    def create
      if service.perform
        @game = service.game
        render :show
      else
        render json: { errors: "建立失敗" }, status: :internal_server_error
      end
    end

    def game_params
      params.permit(place_items: [:bet_amount, :bet_item_code])
    end

    def current_user
      @user ||= User.with_balance || User.create!(balance: 1000)
    end
  end
end
