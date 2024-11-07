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
#  number     :integer
#  reward     :integer          default(0)
#  created_at :datetime
#  user_id    :integer
e
class Game < ApplicationRecord
  # extends ...................................................................
  # includes ..................................................................
  # security (i.e. attr_accessible) ...........................................
  # relationships .............................................................
  has_many :placed_items, dependent: :destroy
  accepts_nested_attributes_for :placed_items
  belongs_to :user
  # validations ...............................................................
  validates :dice1, :dice2, :dice3, presence: true
  validates :dice1, :dice2, :dice3, inclusion: { in: 1..6 }
  # callbacks .................................................................
  after_initialize :roll
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # i.e. place_items: [{code: 'bs01', amount: 100}, code: 'nb13', amount: 100}]
  def result(placed_items)
    roll

    {
      dices: dices,
      number: dices_number,
      bs: dices_bs,
      own_items: [
        won_items: [
          {
            code: "bs02",
          },
          {
            code: "nb14",
          },
          {
            code: "td35",
          },
          {
            code: "td36",
          },
          {
            code: "td56",
          },
          {
            code: "sg03",
          },
          {
            code: "sg05",
          },
          {
            code: "sg06",
          },
          {
            code: "od01",
          },
        ]
      ],
      bet_amount: 100,
      profit: 100,
    }
  end

  def triple?
    dices.uniq.size == 1
  end

  def double?
    dices.uniq.size == 2
  end

  def dices
    [self.dice1, self.dice2, self.dice3]
  end

  def dices_number
    dices.sum
  end

  def dices_bs
    return "-" if triple?

    dices_number >= 10 ? "b" : "s"
  end

  def generate_won_items
    bet_items = BetItem.all
    bet_items.select do |bet_item|
      bet_item.win?(self.dices)
    end
  end

  # protected instance methods ................................................
  # private instance methods ..................................................
  private
  def roll
    dots = [1, 2, 3, 4, 5, 6]
    self.dice1 ||= dots.sample
    self.dice2 ||= dots.sample
    self.dice3 ||= dots.sample

    true
  end

end
