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
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # i.e. place_items: [{code: 'bs01', amount: 100}, code: 'nb13', amount: 100}]
  def dices
    [self.dice1, self.dice2, self.dice3]
  end
  # protected instance methods ................................................
  # private instance methods ..................................................
end
