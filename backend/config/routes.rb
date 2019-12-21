Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    post '/auth/login', to: 'users#login'
    post '/auth/logout', to: 'users#logout'
    post '/auth/signup', to: 'users#signup'
    get '/auth/check-session', to: 'users#check_session_valid'
    get '/messages', to: 'messages#index'
  end
end
