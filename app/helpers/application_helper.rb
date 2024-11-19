# frozen_string_literal: true

module ApplicationHelper
  def app_host
    [ENV["DOMAIN"]].join(".")
  end

  def api_host
    [ENV["DOMAIN"]].join(".")
  end

  def admin_host
    [ENV["SUBDOMAIN_ADMIN"], ENV["DOMAIN"]].join(".")
  end

  def api_url
    "#{ENV['PROTOCOL']}://#{api_host}"
  end
end
