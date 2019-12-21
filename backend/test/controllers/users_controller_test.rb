require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get login" do
    get users_login_url
    assert_response :success
  end

  test "should get logout" do
    get users_logout_url
    assert_response :success
  end

  test "should get signup" do
    get users_signup_url
    assert_response :success
  end

  test "should get check_session_valid" do
    get users_check_session_valid_url
    assert_response :success
  end

end
