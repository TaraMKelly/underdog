require 'rest-client'

def odds_key
    ENV["ODDS_KEY"]
end

def game_dataset
    api_data = {key: odds_key}
    games=RestClient.get("https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=#{api_data[:key]}&regions=us&markets=totals,h2h,spreads&oddsFormat=american")
    games_data = JSON.parse(games)
    # byebug
    games_data.each do |g|
        Game.create(
            game_date: g["commence_time"],
            away_team: g["bookmakers"][0]["markets"][0]["outcomes"][0]["name"], 
            away_ml: g["bookmakers"][0]["markets"][0]["outcomes"][0]["price"],
            home_team: g["bookmakers"][0]["markets"][0]["outcomes"][1]["name"], 
            home_ml: g["bookmakers"][0]["markets"][0]["outcomes"][1]["price"],
            away_spread: g["bookmakers"][0]["markets"][1]["outcomes"][0]["point"],
            home_spread: g["bookmakers"][0]["markets"][1]["outcomes"][1]["point"],
            away_price: g["bookmakers"][0]["markets"][1]["outcomes"][0]["price"],
            home_price: g["bookmakers"][0]["markets"][1]["outcomes"][1]["price"],
            over_under: g["bookmakers"][0]["markets"][2]["outcomes"][0]["point"]
        ) 
    end
end

game_dataset()


User.create(username: "tarakelly16", password: "banana", location: "Brooklyn")
User.create(username: "DaBears12", password: "bears", location: "Chicago")
User.create(username: "FlyEaglesFly", password: "eagles", location: "Michigan")
User.create(username: "gosportsteam", password: "team", location: "USA")
User.create(username: "AlwaysBetTheOver", password: "password", location: "USA")
User.create(username: "DavePortnoy", password: "barstool", location: "USA")
User.create(username: "SportsPotato101", password: "potato", location: "USA")
User.create(username: "TomBrady", password: "brady", location: "USA")
User.create(username: "DegenerateGambler27", password: "degenerate", location: "USA")

puts "✅ Done seeding!"
