import React, {useState, useRef, useEffect, useLayoutEffect, memo} from 'react';
import MovieTile from './movie_tile';
import { randomKeyGen, animateLeft, animateRight } from '../../../util/helper';
import { observeCarouselSize, unobserveCarouselSize, updateScreen} from '../../../util/observers';

const MovieCarousel = ({genre, movieKeys, windowIDX}) => {
    
    const screen = useRef(0);

    const newScreen = directionNum => {
        if((directionNum + screen.current) > 3){
            screen.current = 0;
        } else if((directionNum + screen.current) < 0){
            // screen.current = 3;
            return;
        } else {
            screen.current = (screen.current + directionNum);
        }
        updateScreen(screen.current);
        if(directionNum > 0){
            animateLeft(screen.current, windowIDX);
        } else {
            animateRight(screen.current, windowIDX);
        }
    }

    useEffect( () => {
        observeCarouselSize();
        return () => {
            unobserveCarouselSize();
        }
    }, []);
    
    return(
        genre ?
        <div className='movie-carousel-container'>
            <h1 className='movie-carousel-header'>{genre}</h1>
            <div className='movie-carousel-inner-container'>
                <button 
                    className='prev-carousel-window-button'
                    onClick={() => newScreen(-1)}> 
                    <i className="material-icons">navigate_before</i>
                </button>                      

                <div className='carousel-window' id={`carousel-window-${windowIDX}`}>
                    {[...Array(24).keys()].map((movie, idx) => {
                        return( 
                            <MovieTile
                            spot={ (idx % 6) === 0 ? 'first-' : (idx % 6) === 5 ? 'last-': ''}
                            movieId={idx}
                            genre={genre}
                            key={movieKeys[idx]}
                            />
                            )                   
                        })}
                </div>

                <button 
                    className='next-carousel-window-button' 
                    onClick={() => newScreen(1)}>
                    <i className="material-icons">navigate_next</i>
                </button>        
            </div>
        </div>
        : null
    ) 
};


export default MovieCarousel;