require 'sinatra'
require 'slim'
require 'stripe'
require 'sass'

get('/style.css') do
  scss :'../assets/stylesheets/style'
end

get('/') do
  slim :index
end

get('/sign-up') do
  slim :sign_up
end

# Very todo: Make money
post '/charge' do
  # Amount in cents
  @amount = 500

  customer = Stripe::Customer.create(
      :email => 'customer@example.com',
      :card  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
      :amount      => @amount,
      :description => 'Sinatra Charge',
      :currency    => 'aud',
      :customer    => customer.id
  )

  slim :charged
end