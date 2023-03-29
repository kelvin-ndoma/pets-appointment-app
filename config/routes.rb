Rails.application.routes.draw do
  get 'sessions/create'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :pets
  resources :appointments
end
