class Movie < ApplicationRecord

    validates :title, :description, :rating, :director,:video_url, presence: true
    validates :rating, inclusion: {in: ['g', 'pg', 'pg-13', 'r', 'not rated']}

    has_one_attached :movie_clip
    has_one_attached :cover_art
end
