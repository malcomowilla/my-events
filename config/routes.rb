Rails.application.routes.draw do

  resources :attendees, only: [:index, :show, :create]
  resources :tickets, only: [:index, :show, :create]
  resources :events, only: [:index, :show, :create]

  #resources :booked_tickets
  resources :tickets
  resources :attendees
  resources :organizers
  resources :events
  post '/signup', to: 'users#create_user'
  post '/login', to: 'users#create'
  get '/profile', to: 'users#profile'

  get 'events/:id/tickets', to: 'tickets#specific_tickets'
  delete '/logout', to: 'users#destroy'
  #routes for organizers
  post '/signup-o', to: 'organizers#signup_organizer'
  post '/login-o', to: 'organizers#login_organizer'
  #post events
  post 'events/:organizer_id',to: 'events#create_event'
  resources :organizers do
    resources :events, only: [:create]
   # post '/organizers/:organizer_id/events', to: 'organizers#create_event'
  end
  #routes for booked tickets

  resources :booked_tickets, only: [] do
    collection do
      get '/get/:id', to: 'booked_tickets#get'
      post :post
      delete '/delete/:user_id/:ticket_id', to: 'booked_tickets#delete'
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  

end
