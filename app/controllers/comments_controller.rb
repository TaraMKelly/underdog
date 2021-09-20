class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET /comments
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    #GET /comments/:id
    def show
        comment = find_comment
        render json: comment, status: :ok
    end

    # POST /comments
    def create
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    # PATCH /comments/:id
    def update
        comment = find_comment
        comment.update(comment_params)
        render json: comment, status: :accepted
    end

    # DELETE /comments/:id
    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private

    def find_comment
      Comment.find(params[:id])
    end
  
    def comment_params
      params.permit(:game_id, :user_id, :comments)
    end
  
    def render_not_found_response
      render json: { error: "Comment not found" }, status: :not_found
    end

end
 d