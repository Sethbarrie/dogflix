json.extract! @user, :id, :username, :email, :autoplay
json.movies @user.movies.all.each do |movie|
    json.extract! movie, :id, :title, :rating, :director, :video_url, :description
    json.cover_art url_for(movie.cover_art)
end