# frozen_string_literal: true

require "rails_helper"

describe "POST #create" do
  let!(:user) { create(:user) }
  let!(:bet_item1) { BetItem.find_or_create_by(code: "bs01") }
  let!(:bet_item2) { BetItem.find_or_create_by(code: "tp00") }

  let(:valid_params_with_placed_items) do
    {
      placed_items: [
        { bet_amount: 50, bet_item_code: "bs01" },
        { bet_amount: 50, bet_item_code: "tp00" }
      ]
    }
  end

  context "when parameters are valid" do
    let(:params) { valid_params_with_placed_items }

    describe "response status" do
      before { post "/api/games", params: valid_params_with_placed_items }
      it { expect(response.status).to eq(200) }
    end

    describe "create models" do
      subject { post "/api/games", params: valid_params_with_placed_items }

      it { expect { subject }.to change { Game.count }.by(1) }
      it { expect { subject }.to change { PlacedItem.count }.by(2) }
    end

    describe "response body" do
      subject do
        post "/api/games", params: valid_params_with_placed_items
        json_response
      end

      it { expect(subject.dig("payload", "placed_items").size).to eq(2) }
      it { expect(subject.dig("payload", "placed_items").map { |item| item["bet_amount"] }).to eq([50, 50]) }
      it { expect(subject.dig("payload", "placed_items").map { |item| item["bet_item_code"] }).to eq(%w[bs01 tp00]) }
      it { expect(subject.dig("payload", "game").keys).to match_array(%w[bet_amount bs dice1 dice2 dice3 dices id number profit reward]) }

    end

    context "when place_items is empty" do
      let(:params) { { placed_items: [] } }
      subject { post "/api/games", params: params }

      it { expect { subject }.to change { Game.count }.by(1) }
      it { expect { subject }.to change { PlacedItem.count }.by(0) }
    end
  end

  context "when bet_item_code is invalid" do
    let(:invalid_params) do
      {
        placed_items: [
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
