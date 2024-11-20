# frozen_string_literal: true

# == Schema Information
#
# Table name: games
#
#  id         :bigint           not null, primary key
#  bet_amount :integer          default(0)
#  dice1      :integer
#  dice2      :integer
#  dice3      :integer
#  reward     :integer          default(0)
#  created_at :datetime
#  user_id    :integer
#
require "rails_helper"

RSpec.describe Game, type: :model do
  describe "associations" do
    it { is_expected.to have_many(:placed_items).dependent(:destroy) }
    it { is_expected.to belong_to(:user) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:dice1) }
    it { is_expected.to validate_presence_of(:dice2) }
    it { is_expected.to validate_presence_of(:dice3) }
    it { is_expected.to validate_inclusion_of(:dice1).in_range(1..6) }
    it { is_expected.to validate_inclusion_of(:dice2).in_range(1..6) }
    it { is_expected.to validate_inclusion_of(:dice3).in_range(1..6) }
  end

  describe "#dices" do
    let(:game) { create(:game, dice1: 1, dice2: 2, dice3: 3) }
    it { expect(game.dices).to eq([1, 2, 3]) }
  end

  describe "#number" do
    let(:game) { create(:game, dice1: 1, dice2: 2, dice3: 3) }
    it { expect(game.number).to eq(6) }
  end

  describe "#cup=" do
    let(:game) { create(:game) }
    let(:cup) { Cup.new(1, 2, 3) }
    before { game.cup = cup }
    it { expect(game.dice1).to eq(1) }
    it { expect(game.dice2).to eq(2) }
    it { expect(game.dice3).to eq(3) }
  end

  describe "#cup" do
    let(:game) { create(:game) }
    let(:cup) { Cup.new(1, 2, 3) }
    before { game.cup = cup }
    it { expect(game.cup).to be_a(Cup) }
  end

  context "when bet 3 items, won 2 items" do
    let(:game) { create(:game, dice1: 1, dice2: 2, dice3: 3) }
    let(:bs01) { BetItem.find_or_create_by(code: "bs01") }
    let(:sg01) { BetItem.find_or_create_by(code: "sg01") }
    let(:tp01) { BetItem.find_or_create_by(code: "tp01") }
    let!(:placed_item1) { create(:placed_item, game: game, bet_item: bs01, bet_amount: 100) }
    let!(:placed_item2) { create(:placed_item, game: game, bet_item: sg01, bet_amount: 100) }
    let!(:placed_item3) { create(:placed_item, game: game, bet_item: tp01, bet_amount: 100) }

    describe "#won_items" do
      it "return 8  won items" do
        expect(game.won_items.size).to eq(8)
      end
      it "return 2 won items with reward" do
        expect(game.won_items.count { |item| item[:reward].to_i > 0 }).to eq(2)
      end
      it "return every win item code" do
        expect(game.won_items.map { |item| item[:code] }).to match_array(%w[bs01 nb06 sg01 sg02 sg03 td12 td13 td23])
      end
      it "placed_item include win item 1's correct reward" do
        expect(game.won_items.map { |item| item[:reward] }.compact!).to include(placed_item1.reward(game.cup))
      end
      it "placed_item include win item 2's correct reward" do
        expect(game.won_items.map { |item| item[:reward] }.compact!).to include(placed_item2.reward(game.cup))
      end
    end

    describe "#calculate_profit" do
      subject { game.calculate_profit }
      it { expect { subject }.to change { game.bet_amount }.from(0).to(300) }
      it { expect { subject }.to change { game.reward }.from(0).to(400) }
    end

    describe "#profit" do
      subject { game.calculate_profit }
      it { expect { subject }.to change { game.profit }.from(0).to(100) }
    end

    describe "#trade!" do
      subject {
        game.calculate_profit
        game.trade!
      }
      it { expect { subject }.to change { game.user.balance }.by(100) }
    end
  end

end
