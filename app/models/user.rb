class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :autoplay, inclusion: {in: [true, false]}
    # validates :username, uniqueness: {scope: [:username, :email]}
    #line 5 prevents any username to be the same as an email
    validates :password, length: {minimum: 6}, allow_nil: true
    #want to add tos agreement with validates acceptance: {message: "must agree"}
    #want to add email confirmation with validates  confirmation: true

    after_initialize :ensure_session_token
    attr_reader :password

    ############################################################



    ############################################################

    def self.find_by_credentials(email, pass)
        @user = User.find_by(email: email)
        return nil unless @user
        if @user.is_password?(pass)
            @user
        else
            nil
        end
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    protected

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
