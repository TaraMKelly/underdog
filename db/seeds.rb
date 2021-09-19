require 'rest-client'

ODDS_KEY = ENV['odds_key']

game = RestClient.get "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=ODDS_KEY&regions=us&markets=h2h,spreads&oddsFormat=american"

