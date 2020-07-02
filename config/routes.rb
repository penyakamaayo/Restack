Rails.application.routes.draw do
  resources :comments
  resources :replies
  resources :posts
  devise_for :users

	devise_scope :user do  
   get '/users/sign_out' => 'devise/sessions#destroy'
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "public#index"
end
