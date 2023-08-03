Rails.application.routes.draw do
  resources :tickets
  resources :attendees
  resources :organizers
  resources :events
  post '/signup', to: 'users#create_user'
  post '/login', to: 'users#create'
  get '/profile', to: 'users#profile'

  get 'events/:id/tickets', to: 'tickets#specific_tickets'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
