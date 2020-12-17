@movies.each do |movie|

    json.set! movie.id do
        json.extract! movie, :id, :title, :rating, :director, :video_url
        json.cover_art url_for(movie.cover_art)
    end
end