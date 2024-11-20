class HomepageController < ApplicationController
  include ApplicationHelper
  def index
    @init
    load_init_state
  end

  def load_init_state
    @init_state = {
      info: {
        env: Rails.env,
        version: "v1.0.0",
        api_url: api_url,
      },
      user: {
        name: current_user.name,
        balance: current_user.balance,
      },
      history: {
        records: Game.records,
      }
    }.to_json
  end

  def current_user
    @user ||= User.find_by("balance > 0") || (User.create!(balance: 1000) && User.last)
  end
end
