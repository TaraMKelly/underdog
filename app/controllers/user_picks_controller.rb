class UserPicksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # GET /user_picks
    def index
        user_picks = UserPick.all
        render json: user_picks, status: :ok
    end
        
    # GET /user_picks/:id
    def show
        user_pick = find_user_pick
        ender json: user_pick, status: :ok
    end
        
    # POST /user_picks
    def create
        user_pick = UserPick.create!(user_pick_params)
        render json: user_pick, status: :created
    end
        
    private
        
    def find_user_pick
        UserPick.find(params[:id])
    end
        
    def user_pick_params
        params.permit(:game_date, :over, :under, :team_picked, :user_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
