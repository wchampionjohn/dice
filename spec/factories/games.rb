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
