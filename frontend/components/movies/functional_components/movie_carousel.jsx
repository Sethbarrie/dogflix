import React, { useRef, useEffect, memo, Profiler} from 'react';
import MovieTileContainer from '../containers/movie_tile_container';
import { arraysEqual } from '../../../util/helper';
import { animateLeft, animateRight} from '../../../util/carousel_animate'
import { updateScreen} from '../../../util/observers';

// Debug files and also observers for adding list when scrolling
//import useTraceUpdate from '../../../util/useTraceUpdate';
//import profileWriter from '../../../util/profileWriter';
//import { observeCarouselSize, unobserveCarouselSize, observeLastCarousel, unobserveLastCarousel} from '../../../util/observers';


const MovieCarousel = props => {
    
    const {genre, movieKeys, windowIDX, carouselLength} = props;

    // useTraceUpdate(props, "MovieCarousel");

    const screen = useRef(0);

    const newScreen = directionNum => {
        let maxScreen;
        if(carouselLength > 6){
            if(carouselLength === 24){
                maxScreen = 3;
            } else {
                maxScreen = Math.floor(carouselLength / 6);
            }
        } else  {
            maxScreen = 0;
        }

        if((directionNum + screen.current) > maxScreen){
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
    
    // useEffect( () => {
    //     observeCarouselSize();
    //     observeLastCarousel(props.fetchFavorites, props.currentUser.id);
    //     return () => {
    //         unobserveCarouselSize();
    //         unobserveLastCarousel();
    //     }
    // }, []);
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
                    {[...Array(carouselLength).keys()].map((idx) => {
                        return(
                            // <Profiler id={`MovieTileContainer from ${genre} and spot ${idx}`} onRender={profileWriter}>
                                <MovieTileContainer
                                movieId={idx}
                                genre={genre}
                                key={movieKeys[idx]}
                                />
                            // </Profiler> 
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

function compareMovieKeys(prevProps, nextProps){
    return arraysEqual(prevProps.movieKeys, nextProps.movieKeys);
}


export default memo(MovieCarousel, compareMovieKeys);