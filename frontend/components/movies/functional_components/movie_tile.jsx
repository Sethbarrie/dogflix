import  React, { useState, useEffect } from 'react';
import MovieTilePlayerContainer from '../containers/movie_tile_player_container';
import MovieTileControlsContainer from '../containers/movie_tile_controls_container';
import useDebounced from '../../../util/useDebounce';
import { fetchMovie } from '../../../actions/movie_actions';

const MovieTile = ({genre, movieId, playerKey, controlKey, movieNotDownloaded, fetchMovie}) => {

    const [hovering, setHover] = useState(movieNotDownloaded);
    const debouncedMovie = useDebounced(hovering, 500, 50);
    
    useEffect(() => {
        if(hovering && movieNotDownloaded){
            fetchMovie(movieId);
        } else {
            setHover(debouncedMovie);
        }
    },[debouncedMovie]);


    return(
        genre ?
        <div 
            className='movie-tile' 
            id={debouncedMovie 
                ? 'hovered-movie-tile' 
                : null}
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
        >
            <MovieTilePlayerContainer genre={genre} movieId={movieId} hovering={debouncedMovie} key={playerKey}/>
            <MovieTileControlsContainer genre={genre} movieId={movieId} hovering={debouncedMovie} key={controlKey}/>
        </div> 
        : null
    )
}

export default MovieTile;