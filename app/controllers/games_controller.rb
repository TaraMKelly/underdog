class GamesController < ApplicationController
 
    # GET /games
    def index
        games = Game.all
        render json: games, status: :ok
    end
    
    # GET /games/:id
    def show
        game = find_game
        ender json: game, status: :ok
    end
    
    # POST /games
    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end
    
    private
    
    def find_game
        comment.find(params[:id])
    end
    
    def game_params
        params.permit(:home_team, :away_team, :away_ml, :home_ml, :away_spread, :home_spread, :away_price, :home_price)
    end
    
    end