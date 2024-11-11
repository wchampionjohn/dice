# frozen_string_literal: true

class BaseService
  include ActiveModel::Model
  include ActiveModel::Validations

  def perform
    raise NotImplementedError
  end

  def self.perform(*args)
    new(*args).perform
  end

  def error_sentence
    self.errors.full_messages.to_sentence
  end
end
