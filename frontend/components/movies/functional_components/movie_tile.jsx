import  React, { useState, useEffect, Profiler } from 'react';
import { useSelector } from 'react-redux';
import MovieTilePlayerContainer from '../containers/movie_tile_player_container';
import MovieTileControlsContainer from '../containers/movie_tile_controls_container';
import useDebounced from '../../../util/useDebounce';
import useTraceUpdate from '../../../util/useTraceUpdate';
import profileWriter from '../../../util/profileWriter';

const MovieTile = props => {

    const {genre, movieId, playerKey, controlKey} = props;

    useTraceUpdate(props, "MovieTile");

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
                <AntiFlickerImage genre={genre} movieId={movieId}/>
            {/* <Profiler id={`Controls ${movieId} movieID from ${genre} genre`} onRender={profileWriter}> */}
                <MovieTileControlsContainer genre={genre} movieId={movieId} hovering={debouncedMovie} key={controlKey}/>
            {/* </Profiler> */}
        </div> 
        : null
    )
}


function AntiFlickerImage(props){
    
    const coverImg = useSelector( state => state.carousel[props.genre][props.movieId].cover_art);   

    return(
        <img
            className='anti-flicker-image' 
            src={coverImg}/>
    )
}

export default MovieTile;