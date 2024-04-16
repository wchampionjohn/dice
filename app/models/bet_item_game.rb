# frozen_string_literal: true

# == Schema Information
#
# Table name: bet_item_games
#
#  id          :bigint           not null, primary key
#  bet_item_id :integer
#  game_id     :integer
#  bet_amount  :integer          default(0)
#  profit      :integer          default(0)
#  status      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class BetItemGame < ApplicationRecord
end
