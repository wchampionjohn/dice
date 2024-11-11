FactoryBot.define do
  factory :cup do

    trait :small do
      initialize_with { new(1, 2, 3) }
    end

    trait :big do
      initialize_with { new(4, 5, 6) }
    end

    trait :triple_one do
      initialize_with { new(1, 1, 1) }
    end

    trait :triple_six do
      initialize_with { new(6, 6, 6) }
    end

    trait :double_one do
      initialize_with { new(1, 1, 2) }
    end

    trait :mixed do
      initialize_with { new(1, 2, 3) }
    end

    trait :num_4 do
      initialize_with { new(1, 1, 2) }
    end

    trait :num_12 do
      initialize_with { new(4, 5, 3) }
    end
  end
end
