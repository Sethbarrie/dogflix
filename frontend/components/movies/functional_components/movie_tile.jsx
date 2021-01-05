import  React, { useState, useEffect, Profiler } from 'react';
import MovieTilePlayerContainer from '../containers/movie_tile_player_container';
import MovieTileControlsContainer from '../containers/movie_tile_controls_container';
import useDebounced from '../../../util/useDebounce';
import useTraceUpdate from '../../../util/useTraceUpdate';
import profileWriter from '../../../util/profileWriter';

const MovieTile = props => {

    const {genre, movieId, playerKey, controlKey} = props;

    // useTraceUpdate(props, "MovieTile");

    const [hovering, setHover] = useState(false);
    const debouncedMovie = useDebounced(hovering, 500, 50);
    // const debouncedMovie = useDebounced(hovering, 500, 500000);

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
            {/* <Profiler id={`player ${movieId} movieID from ${genre} genre`} onRender={profileWriter}> */}
                <MovieTilePlayerContainer genre={genre} movieId={movieId} hovering={debouncedMovie} key={playerKey}/>
            {/* </Profiler> */}
            {/* <Profiler id={`Controls ${movieId} movieID from ${genre} genre`} onRender={profileWriter}> */}
                <MovieTileControlsContainer genre={genre} movieId={movieId} hovering={debouncedMovie} key={controlKey}/>
            {/* </Profiler> */}
        </div> 
        : null
    )
}

export default MovieTile;