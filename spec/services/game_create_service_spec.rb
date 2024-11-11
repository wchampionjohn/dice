# frozen_string_literal: true

require "rails_helper"

RSpec.describe GameCreateService, type: :service do
  let(:cup) { Cup.new(*[1, 2, 3]) }
  let(:user) { create(:user, balance: 1000) }
  let(:bet_code1) { "bs01" }
  let(:bet_code2) { "bs02" }
  let(:params) {
    [
      { bet_amount: 100, bet_item_code: bet_code1 },
      { bet_amount: 50, bet_item_code: bet_code2 }
    ]
  }

  let(:service) {
    described_class.new(
      user,
      placed_items_params: params,
      cup: cup
    )
  }
  subject { service.perform }

  context "with valid placed items" do
    it { expect(subject).to be_truthy }
    it { expect { subject }.to change { Game.count }.by(1) }
    it { expect { subject }.to change { PlacedItem.count }.by(2) }
  end

  context "with non-exists bet_item code" do
    let(:bet_code1) { "non-exists" }
    it do
      expect(subject).to be_falsey
      expect(service.error_sentence).to include("下注項目不存在")
    end
  end

  context "when placed amount is 50 + 100" do
    describe "win 50" do
      it "game's bet_amount = 150" do
        expect(subject).to be_truthy
        expect(service.game.bet_amount).to eq(150)
      end

      it "game's reward reward = 200" do
        expect(subject).to be_truthy
        expect(service.game.reward).to eq(200)
      end

      it "game's reward profit = 50" do
        expect(subject).to be_truthy
        expect(service.game.profit).to eq(50)
      end
    end

    context "lose 50" do
      let(:cup) { Cup.new(*[5, 6, 6]) }
      it "game's bet_amount = 150" do
        expect(subject).to be_truthy
        expect(service.game.bet_amount).to eq(150)
      end

      it "game's reward reward = 100" do
        expect(subject).to be_truthy
        expect(service.game.reward).to eq(100)
      end

      it "game's reward profit = -50" do
        expect(subject).to be_truthy
        expect(service.game.profit).to eq(-50)
      end
    end
  end

  context "when user's balance = 1000" do
    context "win 50" do
      it { expect(subject).to be_truthy }
      it { expect { subject }.to change { user.balance }.from(1000).to(1050) }
    end

    context "win 150" do
      let(:bet_code2) { "sg01" }
      it { expect(subject).to be_truthy }
      it { expect { subject }.to change { user.balance }.from(1000).to(1150) }
    end

    context "lose 150" do
      let(:cup) { Cup.new(*[1, 1, 1]) }
      it { expect(subject).to be_truthy }
      it { expect { subject }.to change { user.balance }.from(1000).to(850) }
    end

    context "no placed" do
      let(:params) { [] }
      it { expect(subject).to be_truthy }
      it { expect { subject }.to change { Game.count }.by(1) }
      it { expect { subject }.to change { PlacedItem.count }.by(0) }
      it { expect { subject }.not_to change { user.balance } }
    end
  end
end
