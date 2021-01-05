json.movies @movies.each do |movie|
    json.extract! movie, :id, :title, :rating, :director, :video_url, :description
    json.cover_art url_for(movie.cover_art)
end

json.favoriteMovies @favorites.each do |movie|
    json.extract! movie, :id, :title, :rating, :director, :video_url, :description
    json.cover_art url_for(movie.cover_art)
end