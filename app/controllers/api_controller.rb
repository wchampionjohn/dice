# frozen_string_literal: true

class ApiController < ActionController::API
  include ActionView::Layouts
  layout "api"

  Jbuilder.key_format :underscore

  def handle_crucial_exceptions
    yield
  rescue StandardError => e
    handle_internal_server_error(e)
  end

  def handle_internal_server_error(exception)
    Rails.logger.error(exception.message)
    Rails.logger.error(exception.backtrace.join("\n"))

    render json: { errors: "We encountered unexpected error, but our developers had been already notified about it" }, status: :internal_server_error
  end
end
