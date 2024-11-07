# frozen_string_literal: true

# == Schema Information
#
# Table name: placed_items
#
#  id          :bigint           not null, primary key
#  bet_amount  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  bet_item_id :bigint           not null
#  game_id     :bigint           not null
#
# Indexes
#
#  index_placed_items_on_bet_item_id  (bet_item_id)
#  index_placed_items_on_game_id      (game_id)
#
# Foreign Keys
#
#  fk_rails_...  (bet_item_id => bet_items.id)
#  fk_rails_...  (game_id => games.id)
#
require "rails_helper"

RSpec.describe PlacedItem, type: :model do
  describe "#reward" do
    let(:bet_item) { BetItem.find_or_create_by(code: "bs01", base_odds: 2) }
    let(:placed_item) { create(:placed_item, bet_item: bet_item, bet_amount: 100) }
    let(:cup) { double("Cup") }
    let(:won) { true }

    before { allow(bet_item).to receive(:win?).and_return(won) }

    subject { placed_item.reward(cup) }

    context "when base_odds is 2" do
      context "when bet 100 is won" do
        it { is_expected.to eq(200) }
      end

      context "when bet 100 is lost" do
        let(:won) { false }
        it { is_expected.to eq(0) }
      end

      context "when bet 100 is won and bet_item is multiple_dice_amount" do
        let(:bet_item) { BetItem.find_or_create_by(code: "sg01", base_odds: 2, multiple_dice_amount: true) }

        context "when cup contain 1 dices" do
          before { allow(cup).to receive(:dices).and_return([1, 2, 3]) }
          it { is_expected.to eq(200) }
        end

        context "when cup contain 2 dices" do
          before { allow(cup).to receive(:dices).and_return([1, 1, 2]) }
          it { is_expected.to eq(300) }
        end

        context "when cup contain 3 dices" do
          before { allow(cup).to receive(:dices).and_return([1, 1, 1]) }
          it { is_expected.to eq(400) }
        end
      end
    end

    context "when base_odds is 30" do
      let(:bet_item) { BetItem.find_or_create_by(code: "tp00", base_odds: 30) }

      context "when bet 100 is won" do
        it { is_expected.to eq(3000) }
      end
    end
  end

  describe "#profit" do
    let(:bet_item) { BetItem.find_or_create_by(code: "bs01", base_odds: 2) }
    let(:placed_item) { create(:placed_item, bet_item: bet_item, bet_amount: bet_amount) }
    let(:cup) { double("Cup") }
    subject { placed_item.profit(cup) }

    context "when bet 199" do
      let(:bet_amount) { 199 }
      context "when reward is 398" do
        before { allow(placed_item).to receive(:reward).and_return(398) }
        it { is_expected.to eq(199) } # 398 - 199
      end

      context "when reward is 0" do
        before { allow(placed_item).to receive(:reward).and_return(0) }
        it { is_expected.to eq(-199) } # 0 - 199
      end
    end
  end
end
