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

class Game < ApplicationRecord
  DEFAULT_VALUES = {
    reward: 0,
    bet_amount: 0
  }
  # extends ...................................................................
  # includes ..................................................................
  # security (i.e. attr_accessible) ...........................................
  # relationships .............................................................
  has_many :placed_items, class_name: "PlacedItem", dependent: :destroy
  accepts_nested_attributes_for :placed_items
  belongs_to :user
  # validations ...............................................................
  validates :dice1, :dice2, :dice3, presence: true
  validates :dice1, :dice2, :dice3, inclusion: { in: 1..6 }
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  def dices
    [self.dice1, self.dice2, self.dice3]
  end

  def number
    self.dices.sum
  end

  def cup=(cup)
    self.dice1 = cup.dices[0]
    self.dice2 = cup.dices[1]
    self.dice3 = cup.dices[2]
  end

  def cup
    return nil if self.dices.any?(&:nil?)

    @cup ||= Cup.new(self.dice1, self.dice2, self.dice3)
  end

  def won_items
    return [] if self.cup.blank?

    BetItem.all
           .select { |item| item.win?(cup) }
           .map { |item| { code: item.code, reward: placed_items.find_by(bet_item: item).try(:reward, cup) } }
  end

  def calculate_profit
    self.reward = placed_items.sum { |item| item.reward(cup) }
    self.bet_amount = placed_items.sum(&:bet_amount)
  end

  # 損益，贏的話是正數，輸的話是負數
  def profit
    self.reward - self.bet_amount
  end

  def trade!
    ActiveRecord::Base.transaction do
      save!
      user.update_new_balance(profit)
    end
  end

  def bs
    if @cup.big?
      "b"
    elsif @cup.small?
      "s"
    else
      "-"
    end
  end

  # protected instance methods ................................................
  # private instance methods ..................................................
end
