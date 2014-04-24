require 'test_helper'

class StudyControllerTest < ActionController::TestCase
  test "should get modes" do
    get :modes
    assert_response :success
  end

end
