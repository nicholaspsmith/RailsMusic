Musicapp::Application.routes.draw do
  get "study/keys"
  get "study/modes"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  get  'study/keys'
  get  'study/modes'
end
