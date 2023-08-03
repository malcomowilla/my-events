Rails.application.routes.draw do
  resources :attendees,only: [:index, :show, :create]
  resources :tickets
  resources :events, only: [:index, :create, :show]

end
