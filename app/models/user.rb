# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  balance    :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
end
