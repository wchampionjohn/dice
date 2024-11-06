# frozen_string_literal: true

# == Schema Information
#
# Table name: games
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  bet_amount :integer          default(0)
#  profit     :integer          default(0)
#  number     :integer
#  bs         :integer
#  dice1      :integer
#  dice2      :integer
#  dice3      :integer
#  created_at :datetime
#
require "rails_helper"

RSpec.describe Game, type: :model do
  describe "initialize" do
    let(:game) { Game.new }

    # let(:result) {
    #   {
    #     dices: [1, 3, 5],
    #     bs: "b",
    #     number: 9,
    #     own_items: [
    #       won_items: [
    #         {
    #           code: "bs02",
    #         },
    #         {
    #           code: "nb14",
    #         },
    #         {
    #           code: "td35",
    #         },
    #         {
    #           code: "td36",
    #         },
    #         {
    #           code: "td56",
    #         },
    #         {
    #           code: "sg03",
    #         },
    #         {
    #           code: "sg05",
    #         },
    #         {
    #           code: "sg06",
    #         },
    #         {
    #           code: "od01",
    #         },
    #       ]
    #     ],
    #     bet_amount: 100,
    #     profit: 100,
    #   }
    # }

    it "set number to three dices" do
      expect(game.dice1).to be_between(1, 6)
      expect(game.dice2).to be_between(1, 6)
      expect(game.dice3).to be_between(1, 6)
    end

    describe "#dices_number" do
      subject { game.dices_number }
      it "return sum of dices" do
        is_expected.to eq(game.dice1 + game.dice2 + game.dice3)
      end
    end

    describe "#dices_bs" do
      subject { game.dices_bs }

      context "when triple" do
        let(:game) { Game.new(dice1: 1, dice2: 1, dice3: 1) }
        it { is_expected.to eq("-") }
      end

      context "when number > 10" do
        let(:game) { Game.new(dice1: 5, dice2: 6, dice3: 1) }
        it { is_expected.to eq("b") }
      end

      context "when number = 10" do
        let(:game) { Game.new(dice1: 3, dice2: 3, dice3: 4) }
        it { is_expected.to eq("b") }
      end

      context "when number = 7" do
        let(:game) { Game.new(dice1: 1, dice2: 2, dice3: 4) }
        it { is_expected.to eq("s") }
      end
    end

    describe "#triple?" do
      subject { game.triple? }

      context "when dices is 1, 1, 1" do
        let(:game) { Game.new(dice1: 1, dice2: 1, dice3: 1) }
        it { is_expected.to be_truthy }
      end

      context "when dices is 1, 2, 3" do
        let(:game) { Game.new(dice1: 1, dice2: 2, dice3: 3) }
        it { is_expected.to be_falsey }
      end
    end
  end
end
