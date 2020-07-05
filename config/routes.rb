Rails.application.routes.draw do
  # get 'upvote/create'
  # get 'upvote/destroy'
  resources :comments
  resources :replies
  resources :posts
  devise_for :users

  resources :posts do 
    resources :upvotes, only: [:create, :destroy]
  end

	devise_scope :user do  
   get '/users/sign_out' => 'devise/sessions#destroy'
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "posts#index"
end
