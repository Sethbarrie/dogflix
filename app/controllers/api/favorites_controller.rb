class Api::FavoritesController < ApplicationController

    # def show
    #     @favorite = Favorite.find_by(user_id: params[:user_id])
    #     render :show
    # end

    # def create
    #     @favorite = Favorite.new(favorite_params)
    #     @favorite.user_id = current_user.id
    #     if @favorite.save
    #         render :create
    #     else
    #         render @favorite.errors.full_messages, status: 480
    #     end
    # end

    # def edit
    #     @favorite = Favorite.find_by(user_id: params[:user_id])
    #     render :edit
    # end

    # def update
    #     @favorite = Favorite.find_by(user_id: params[:user_id])
    #     @favorite.update(favorite_params)
    #     if @favorite && @favorite.save
    #         render "/api/users/#{params[:user_id]}/favorites"
    #     else
    #         render json: ['Your favorite is unavailable right now, please try again later.']
    #     end 
    # end

    def show
        @user = User.find_by(id: params[:user_id])
        render :show
    end


    def edit 
        @user = User.find_by(id: params[:user_id])
        @movie = Movie.find_by(id: params[:id])
        @user.movies << @movie
        if @user.save
            render :show
        else
            render json: ['Your favorites list is unavailable right now, please try again later.']
        end
    end

    def update
        @user = User.find_by(id: params[:user_id])
        @movie = @user.movies.find_by(id: params[:movie_id])
        @user.movies.delete(@movie) unless @movie.nil?
        render :show
    end





    protected

    def favorite_params
        params.require(:favorite).permit(:user_id, :movie_id)
    end

end