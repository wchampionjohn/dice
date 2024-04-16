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
class Game < ApplicationRecord
  # extends ...................................................................
  # includes ..................................................................
  # security (i.e. attr_accessible) ...........................................
  # relationships .............................................................
  has_many :bet_item_games, class_name: "BetItemGame"
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  def roll
    {
      dices: [1, 3, 5],
      bs: "b",
      number: 9,
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

  # protected instance methods ................................................
  # private instance methods ..................................................
end
