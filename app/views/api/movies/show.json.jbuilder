json.(@movie, :id, :title, :description, :rating, :director, :video_url)
json.cover_art url_for(@movie.cover_art)
json.movie_clip url_for(@movie.movie_clip)