Rails.application.routes.draw do
  resources :user_picks, only: [:index, :show, :create]
  resources :comments
  resources :games, only: [:index, :show, :create]
  get '/users', to: 'users#index'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # resources :users
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
