# frozen_string_literal: true

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
require "rails_helper"

RSpec.describe BetItem, type: :model do
  subject { build(:bet_item) }

  describe "validations" do
    it { is_expected.to validate_presence_of(:code) }
    it { is_expected.to validate_presence_of(:base_odds) }
    it { is_expected.to validate_uniqueness_of(:code).case_insensitive }
  end

  describe "#win?" do
    context "when code is bs01" do
      subject { build(:bet_item, code: "bs01") }

      context "when cup is small" do
        let(:cup) { build(:cup, :small) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup is big" do
        let(:cup) { build(:cup, :big) }
        it { expect(subject.win?(cup)).to be_falsey }
      end
    end

    context "when code is bs02" do
      subject { build(:bet_item, code: "bs02") }

      context "when cup is small" do
        let(:cup) { build(:cup, :small) }
        it { expect(subject.win?(cup)).to be_falsey }
      end

      context "when cup is big" do
        let(:cup) { build(:cup, :big) }
        it { expect(subject.win?(cup)).to be_truthy }
      end
    end

    context "when code is tp00" do
      subject { build(:bet_item, code: "tp00") }

      context "when cup is triple one" do
        let(:cup) { build(:cup, :triple_one) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup is triple six" do
        let(:cup) { build(:cup, :triple_six) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup is mixed" do
        let(:cup) { build(:cup, :mixed) }
        it { expect(subject.win?(cup)).to be_falsey }
      end

      context "when cup is double_one" do
        let(:cup) { build(:cup, :double_one) }
        it { expect(subject.win?(cup)).to be_falsey }
      end
    end

    context "when code is tp01" do
      subject { build(:bet_item, code: "tp01") }

      context "when cup is triple_one" do
        let(:cup) { build(:cup, :triple_one) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup is triple_six" do
        let(:cup) { build(:cup, :triple_six) }
        it { expect(subject.win?(cup)).to be_falsey }
      end
    end

    context "when code is nb04" do
      subject { build(:bet_item, code: "nb04") }

      context "when cup number is four" do
        let(:cup) { build(:cup, :num_4) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup number is 12" do
        let(:cup) { build(:cup, :num_12) }
        it { expect(subject.win?(cup)).to be_falsey }
      end
    end

    context "when code is td12" do
      subject { build(:bet_item, code: "td12") }

      context "when cup number is 1,2,3" do
        let(:cup) { Cup.new(1, 2, 3) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup number is 1,6,2" do
        let(:cup) { Cup.new(1, 6, 2) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup number is 1,1,2" do
        let(:cup) { Cup.new(2, 1, 1) }
        it { expect(subject.win?(cup)).to be_truthy }
      end
      context "when cup number is 1,1,2" do
        let(:cup) { Cup.new(3, 1, 1) }
        it { expect(subject.win?(cup)).to be_falsey }
      end
    end

    context "when code is sg01" do
      subject { build(:bet_item, code: "sg01") }
      context "when cup number is 1,2,3" do
        let(:cup) { Cup.new(1, 2, 3) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup number is 1,1,2" do
        let(:cup) { Cup.new(1, 1, 2) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup number is 1,1,1" do
        let(:cup) { Cup.new(1, 1, 1) }
        it { expect(subject.win?(cup)).to be_truthy }
      end

      context "when cup number is 2,2,4" do
        let(:cup) { Cup.new(2, 2, 4) }
        it { expect(subject.win?(cup)).to be_falsey }
      end
    end
  end

  describe "#odds" do
    let(:bet_item) { build(:bet_item, code: "tp01", base_odds: 100.0) }

    context "when multiple_dice_amount is false" do
      it { expect(bet_item.odds).to eq(100.0) }
    end

    context "when multiple_dice_amount is true" do
      let(:bet_item) { build(:bet_item, code: "sg01", base_odds: 2.0, multiple_dice_amount: true) }
      context "when contain three dices" do
        let(:cup) { build(:cup, :triple_one) }
        it { expect(bet_item.odds(cup)).to eq(4.0) }
      end
      context "when contain double dices" do
        let(:cup) { build(:cup, :double_one) }
        it { expect(bet_item.odds(cup)).to eq(3.0) }
      end
      context "when contain one dices" do
        let(:cup) { Cup.new(1, 2, 3) }
        it { expect(bet_item.odds(cup)).to eq(2.0) }
      end
    end

  end
end
