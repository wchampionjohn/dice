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
  describe "#roll" do
    let(:game) { Game.new }

    let(:result) {
      {
        dices: [1, 3, 5],
        bs: "b",
        number: 9,
      }
    }

    let(:game_bet_items)

    it "returns a number between 1 and 6" do
      expect(game.roll).to be_between(1, 6)
    end
  end
end
