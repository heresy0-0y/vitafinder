Rails.application.routes.draw do
  resources :vitamins
  resources :supplements
  resources :brands
  resources :vitamin_amount_per_supplement
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
