module ApiTestHelper

  def json_response
    case body = JSON.parse(response.body)
    when Hash
      body.with_indifferent_access
    when Array
      body
    else
      # type code here
    end
  end
end
