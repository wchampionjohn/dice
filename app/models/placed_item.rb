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
class PlacedItem < ApplicationRecord
  # extends ...................................................................
  # includes ..................................................................
  # security (i.e. attr_accessible) ...........................................
  # relationships .............................................................
  belongs_to :game
  belongs_to :bet_item
  # validations ...............................................................
  validates :bet_amount, presence: true
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  delegate :win?, to: :bet_item
  # class methods .............................................................
  # public instance methods ...................................................
  def reward(cup)
    win?(cup) ? bet_amount * bet_item.odds(cup) : 0
  end

  def profit(cup)
    reward(cup) - bet_amount
  end

  # protected instance methods ................................................
  # private instance methods ..................................................
end
