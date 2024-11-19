# frozen_string_literal: true

class Cup
  NUMBER_MAP = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four",
    5 => "five",
    6 => "six",
  }

  def initialize(dice1, dice2, dice3)
    @dice1 = dice1
    @dice2 = dice2
    @dice3 = dice3
  end

  def dices
    [@dice1, @dice2, @dice3]
  end

  def triple?(specific_num = nil)
    if specific_num
      dices.count(specific_num) == 3
    else
      dices.uniq.size == 1
    end
  end

  def double?(specific_num = nil)
    if specific_num
      dices.count(specific_num) == 2
    else
      dices.uniq.size == 2
    end
  end

  def number
    dices.sum
  end

  def big?
    return false if triple?
    number > 10
  end

  def small?
    return false if triple?
    number.between?(4, 10)
  end

  def self.roll
    new(rand(1..6), rand(1..6), rand(1..6))
  end

private
  def double_dice
    dices.find { |dice| dices.count(dice) == 2 }
  end

  def triple_dice
    dices.find { |dice| dices.count(dice) == 3 }
  end

end
