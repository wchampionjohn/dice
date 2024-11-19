# frozen_string_literal: true

# == Schema Information
#
# Table name: bet_items
#
#  id                   :bigint           not null, primary key
#  base_odds            :decimal(5, 2)
#  code                 :string(255)
#  multiple_dice_amount :boolean          default(FALSE)
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class BetItem < ApplicationRecord
  WIN_CONDITIONS = {
    "bs01" => ->(cup) { !cup.triple? && cup.small? },
    "bs02" => ->(cup) { !cup.triple? && cup.big? },
    "tp00" => ->(cup) { cup.triple? }
  }
  DICE_AMOUNT = {}

  # 動態產生 db01 ~ db06, tp01 ~ tp06 的比對條件
  # i.e db01: cup.double?(1)
  # i.e tp01: cup.triple?(1)
  (1..6).each do |num|
    WIN_CONDITIONS["db#{format('%02d', num)}"] = ->(cup) { cup.double?(num) }
    WIN_CONDITIONS["tp#{format('%02d', num)}"] = ->(cup) { cup.triple?(num) }
    WIN_CONDITIONS["sg#{format('%02d', num)}"] = ->(cup) { cup.dices.include?(num) }
    DICE_AMOUNT["sg#{format('%02d', num)}"] = ->(cup) { cup.dices.count(num) - 1 }
  end

  # 動態產生 nb04 ~ nb17 的比對條件
  # i.e nb04: cup.number == 4
  (4..17).each do |num|
    WIN_CONDITIONS["nb#{format('%02d', num)}"] = ->(cup) { cup.number == num }
  end

  # 動態產生 td12 ~ td56 的比對條件
  # i.e td35: cup.dices.include?(3) && cup.dices.include?(5)
  (1..5).each do |dice1|
    ((dice1 + 1)..6).each do |dice2|
      code = "td#{dice1}#{dice2}"
      WIN_CONDITIONS[code] = ->(cup) { (cup.dices.include?(dice1) & cup.dices.include?(dice2)) }
    end
  end

  # extends ...................................................................
  # includes ..................................................................
  # security (i.e. attr_accessible) ...........................................
  # relationships .............................................................
  has_many :placed_items, class_name: "PlacedItem", dependent: :destroy
  # validations ...............................................................
  validates :code, :base_odds, presence: true
  validates :code, uniqueness: true
  validates :code, inclusion: { in: WIN_CONDITIONS.keys, message: "%{value} 不是有效的投注代碼" }
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................

  def win?(cup)
    win_condition = WIN_CONDITIONS[self.code]
    return false unless win_condition

    win_condition.call(cup)
  end

  def odds(cup = nil)
    if self.multiple_dice_amount?
      return base_odds + DICE_AMOUNT[self.code].call(cup)
    end

    self.base_odds
  end

  # protected instance methods ................................................
  # private instance methods ..................................................
end
