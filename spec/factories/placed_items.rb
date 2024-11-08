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
FactoryBot.define do
  factory :placed_item do
    association :game

  end
end
