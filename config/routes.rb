Rails.application.routes.draw do
	resources :service
	root 'service#index'

	get '/cart', to: 'order_items#index'
	resources :order_items, path: '/cart/items'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
