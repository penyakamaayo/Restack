Rails.application.routes.draw do
  resources :comments
  devise_for :users
  resources :posts

	devise_scope :user do  
   get '/users/sign_out' => 'devise/sessions#destroy'
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "public#index"
end
