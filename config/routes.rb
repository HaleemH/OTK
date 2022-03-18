Rails.application.routes.draw do
  resources :users
  resources :comments, only: [:index,:show,:create,:destroy]
  resources :tasks
  resources :vendors


  # user Login
  post "/login", to: "sessions#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
