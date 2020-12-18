import React, { useState, useEffect, useRef, memo } from "react";

const MovieTilePlayer = ({hovering, movieId, movie, fetchMovie}) => {

    const movieRef = useRef()
    
    useEffect(() => {
        if(hovering && !movie.movie_clip){
            fetchMovie(movie.id);
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
            <img 
                className='anti-flicker-image' 
                id={hovering ? 'hovered-anti-flicker-image' : null}
                src={movie.cover_art} />
            <video
            id={hovering ? 'hovered-movie-tile-video' : null} 
            className='movie-tile-video' 
            poster={movie.cover_art} 
            muted 
            loop
            autoPlay={hovering}
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


// export default memo(MovieTilePlayer, propComp);

export default MovieTilePlayer;
