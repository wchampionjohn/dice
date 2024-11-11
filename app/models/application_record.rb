# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  after_initialize :default_values, if: :need_set_default_values?

  def default_values
    self.class::DEFAULT_VALUES.each do |column_name, default_value|
      send(:"#{column_name}=", default_value) if send(column_name).blank?
    end
  end

  def need_set_default_values?
    new_record? && self.class.const_defined?("DEFAULT_VALUES")
  end
end
