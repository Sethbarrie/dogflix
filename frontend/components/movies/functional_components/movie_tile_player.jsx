import React, { useState, useEffect, useRef, memo } from "react";
import useTraceUpdate from "../../../util/useTraceUpdate";

const MovieTilePlayer = props => {

    // useTraceUpdate(props, "MovieTilePlayer");

    const {hovering, movie, fetchMovie, genre} = props;

    const movieRef = useRef();
    const movieDownloaded = useRef(!!movie.movie_clip);
    
    let expanded
    if(movieDownloaded.current && hovering){
        expanded = true;
    } else {
        expanded = false;
    }
    
    useEffect(() => {
        if(hovering && !movie.movie_clip){
            fetchMovie(movie.id, genre);
        }
    },[hovering])

    useEffect(() => {
        if(hovering && movie.movie_clip && movieRef.current.paused){
            movieRef.current.play();
            return;
        }
        if(!hovering && movie.movie_clip && !movieRef.current.paused){
            movieRef.current.pause();
            movieRef.current.currentTime = 0;
            movieRef.current.load();
        }
    }, [hovering, movie])



    return (
        movie ?
        <>  
            <video
            id={expanded ? 'hovered-movie-tile-video' : null} 
            className='movie-tile-video' 
            poster={movie.cover_art} 
            muted 
            loop
            autoPlay={expanded}
            ref={movieRef}
            >
                <source src={movie.movie_clip || null} type='video/webm'/>
                <source src={movie.movie_clip || null} type='video/mp4'/>
            </video>

        </>
        : null
    )
}


const propComp = (prevProp, nextProp) => {

    if(prevProp.hovering !== nextProp.hovering) return false;
    if(prevProp.movie.movie_clip === undefined && nextProp.movie.movie_clip !== undefined) return false;
    return true;

}


export default memo(MovieTilePlayer, propComp);

// export default MovieTilePlayer;
