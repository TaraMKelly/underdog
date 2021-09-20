class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        games = Game.all
        render json: games, status: :ok
    end

    def show
        game = find_game
        render json: game, status: :ok
    end

    private

    def find_game
        Game.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Game not found" }, status: :not_found
    end

end
