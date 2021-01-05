class Api::FavoritesController < ApplicationController

    def show
        @user = User.find_by(id: params[:user_id])
        @movies = @user.movies.with_attached_small_cover_art
        render :show
    end

    def edit 
        @user = User.find_by(id: params[:user_id])
        @movies = @user.movies.with_attached_small_cover_art
        unless @user.movies.find_by(id: params[:id]).nil?
            render :show
        else
            @movie = Movie.find_by(id: params[:id])

            @user.movies << @movie
            if @user.save
                render :show
            else
                render json: ['There was an error somewhere. Please try again later.']
            end
        end
    end

    def update
        @user = User.find_by(id: params[:user_id])
        @movie = @user.movies.find_by(id: params[:id])
        @user.movies.delete(@movie) unless @movie.nil?
        @movies = @user.movies.with_attached_small_cover_art
        render :show
    end

    protected

    def favorite_params
        params.require(:favorite).permit(:user_id, :movie_id)
    end

end