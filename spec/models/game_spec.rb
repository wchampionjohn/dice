# frozen_string_literal: true

# == Schema Information
#
# Table name: games
#
#  id         :bigint           not null, primary key
#  bet_amount :integer          default(0)
#  bs         :integer
#  dice1      :integer
#  dice2      :integer
#  dice3      :integer
#  reward     :integer          default(0)
#  created_at :datetime
#  user_id    :integer
#
require "rails_helper"

RSpec.describe Game, type: :model do
  describe "initialize" do
    let(:game) { Game.new }
  end
end
