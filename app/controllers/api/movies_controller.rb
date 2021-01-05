class Api::MoviesController < ApplicationController

    def index
        @movies = Movie.with_attached_cover_art.all
        @favorites = User.find_by(id: current_user.id).movies
        render :index
    end

    def show
        @movie = Movie.with_attached_movie_clip.with_attached_cover_art.find_by(id: params[:id])
        if @movie
            render :show
        else
            render json: ['Sorry, something went wrong on our end, please pick another title.'], status: 404
        end
    end

end