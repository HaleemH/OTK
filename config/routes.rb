Rails.application.routes.draw do
  resources :task_comments, only: [ :show, :create]
  resources :users
  # resources :comments, only: [:index,:show,:create,:destroy]
  resources :tasks
  resources :vendors, only: [ :show, :index]


  # user Login
  post "/login", to: "sessions#create"
  get "/profile/:id", to: "tasks#profile"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
