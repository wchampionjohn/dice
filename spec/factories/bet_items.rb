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
FactoryBot.define do
  factory :bet_item do
    
  end
end
