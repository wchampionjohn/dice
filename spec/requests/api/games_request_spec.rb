# frozen_string_literal: true

require "rails_helper"

describe "POST #create" do
  let!(:user) { create(:user) }
  let(:bet_item1) { BetItem.find_or_create_by(code: "bs01") }
  let(:bet_item2) { BetItem.find_or_create_by(code: "tp00") }

  let(:valid_params) do
    {
      place_items: [
        { bet_amount: 50, bet_item_code: "bs01" },
        { bet_amount: 50, bet_item_code: "tp00" }
      ]
    }
  end

  context "when parameters are valid" do
    it "creates a new game and placed items" do
      expect {
        post "/api/games", params: valid_params
      }.to change(Game, :count).by(1)
                               .and change(PlacedItem, :count).by(2)

      expect(response).to have_http_status(:created)
      expect(json_response["id"]).to eq(Game.last.id)
    end
  end

  context "when bet_item_code is invalid" do
    let(:invalid_params) do
      {
        place_items: [
          { bet_amount: 50, bet_item_code: "invalid_code" }
        ]
      }
    end

    it "does not create a new game" do
      expect {
        post "/api/games", params: invalid_params
      }.to_not change(Game, :count)

      expect(response).to have_http_status(:internal_server_error)
      expect(json_response["errors"]).to include("建立失敗")
    end
  end
end
