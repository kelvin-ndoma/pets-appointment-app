Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :appointments
  resources :users do
    resources :pets, only: [:index] do
      resources :appointments, only: [:create]
    end
  end
  resources :user_pets
  resources :user_appointments
  resources :pets
end


