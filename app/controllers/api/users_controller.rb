class Api::UsersController < ApplicationController

    #before_action :require_logged_in, only: [:index, :show]


    def create
        @user = User.new(user_params)
        if @user.save
            sign_in!(@user)
            render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        @user.update(user_params)
        if @user && @user.save
            render '/api/users/show'
        else
            render json: ['Sorry, something went wrong on our end. Please try again later.']
        end
    end

    protected

    def user_params
        params.require(:users).permit(:username, :email, :password, :autoplay)
    end

    # def user_params_with_autoplay
    #     params.require(:users).permit(:username, :email, :password, :autoplay)
    # end
    
end
