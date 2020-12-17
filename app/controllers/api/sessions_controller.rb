class Api::SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        unless signed_in?
            @user = User.find_by_credentials(
                params[:users][:email],
                params[:users][:password]
            )
            if @user.nil?
                render json: ["Sorry, we can't find an account with this email address. Please try again or create a new account."], status: 401
            else
                sign_in!(@user)
                render 'api/users/show'
            end
        end
    end

    def destroy
        if signed_in?
            sign_out!
            render json: { message: 'Signed out'}
        end
    end

end