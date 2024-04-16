# == Schema Information
#
# Table name: bet_items
#
#  id         :bigint           not null, primary key
#  code       :string(255)
#  odds       :decimal(5, 2)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BetItem < ApplicationRecord
end
