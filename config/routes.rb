Rails.application.routes.draw do
  resources :attendees,only: [:index, :show, :create]
  resources :tickets, only: [:index, :show, :create]
  resources :events, only: [:index, :show, :create]
end
