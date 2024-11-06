# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Cup" do
  let(:cup) { Cup.new(*dices) }

  describe "#number" do
    subject { cup.number }

    context "when dices is 1,2,3" do
      let(:dices) { [1, 2, 3] }
      it { is_expected.to eq(6) }
    end

    context "when dices is 4,5,6" do
      let(:dices) { [4, 5, 6] }
      it { is_expected.to eq(15) }
    end
  end

  describe "#triple?" do
    subject { cup.triple? }

    context "non with numb" do

      context "when dices is 1,1,1" do
        let(:dices) { [1, 1, 1] }
        it { is_expected.to be_truthy }
      end

      context "when dices is 1,2,3" do
        let(:dices) { [1, 2, 3] }
        it { is_expected.to be_falsey }
      end
    end

    context "with numb 2" do
      subject { cup.triple?(2) }

      context "when dices is 1,2,3" do
        let(:dices) { [1, 2, 3] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 2,2,3" do
        let(:dices) { [2, 2, 3] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 1,1,1" do
        let(:dices) { [1, 1, 1] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 2,2,2" do
        let(:dices) { [2, 2, 2] }
        it { is_expected.to be_truthy }
      end
    end
  end

  describe "#double?" do
    context "non with numb" do
      subject { cup.double? }

      context "when dices is 1,1,2" do
        let(:dices) { [1, 1, 2] }
        it { is_expected.to be_truthy }
      end

      context "when dices is 3,3,2" do
        let(:dices) { [3, 3, 2] }
        it { is_expected.to be_truthy }
      end

      context "when dices is 2,2,2" do
        let(:dices) { [2, 2, 2] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 1,2,3" do
        let(:dices) { [1, 2, 3] }
        it { is_expected.to be_falsey }
      end
    end
    context "with numb 2" do
      subject { cup.double?(2) }

      context "when dices is 1,1,2" do
        let(:dices) { [1, 1, 2] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 3,3,2" do
        let(:dices) { [3, 3, 2] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 2,2,2" do
        let(:dices) { [2, 2, 2] }
        it { is_expected.to be_falsy }
      end

      context "when dices is 1,2,2" do
        let(:dices) { [1, 2, 2] }
        it { is_expected.to be_truthy }
      end

      context "when dices is 2,1,2" do
        let(:dices) { [1, 2, 2] }
        it { is_expected.to be_truthy }
      end
    end
  end

  describe "#big?" do
    subject { cup.big? }

    context "when dices number = 10" do
      let(:dices) { [5, 2, 3] }
      it { is_expected.to be_falsey }
    end

    context "when dices number > 10" do
      let(:dices) { [4, 4, 3] }
      it { is_expected.to be_truthy }
    end
  end

  describe "#small?" do
    subject { cup.small? }

    context "when dices number < 10" do
      let(:dices) { [4, 2, 3] }
      it { is_expected.to be_truthy }
    end

    context "when dices number = 10" do
      let(:dices) { [5, 2, 3] }
      it { is_expected.to be_truthy }
    end

    context "when dices number > 10" do
      let(:dices) { [4, 4, 3] }
      it { is_expected.to be_falsey }
    end
  end

  describe "#dices" do
    subject { cup.dices }

    context "when dices is 1,2,3" do
      let(:dices) { [1, 2, 3] }
      it { is_expected.to eq([1, 2, 3]) }
    end
  end

  describe ".roll" do
    let!(:cup) { Cup.roll }
    it { expect(cup.dices).to all(be_between(1, 6)) }
  end
end
