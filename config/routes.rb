Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users do
      resources :items
    end
    get "my_items", to: "items#my_items"
    get "profile", to: "users#my_profile"

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
