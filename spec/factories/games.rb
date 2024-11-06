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
    user_id { 1 }

    trait :number_bigger_than_10 do
      dice1 { 5 }
      dice2 { 5 }
      dice3 { 5 }
    end

  end
end
