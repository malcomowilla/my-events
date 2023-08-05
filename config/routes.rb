Rails.application.routes.draw do
  resources :booked_tickets
  resources :tickets
  resources :attendees
  resources :organizers
  resources :events
  post '/signup', to: 'users#create_user'
  post '/login', to: 'users#create'
  get '/profile', to: 'users#profile'

  get 'events/:id/tickets', to: 'tickets#specific_tickets'
  delete '/logout', to: 'users#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :organizers do
    resources :events, only: [:create]
  end
end
