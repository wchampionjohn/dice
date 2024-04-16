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
FactoryBot.define do
  factory :game do
    
  end
end
