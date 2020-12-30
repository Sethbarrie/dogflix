Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :new, :create, :edit, :update] do
        resources :favorites, only: [:show, :edit, :update]
    end
    resources :movies, only: [:show, :index]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
