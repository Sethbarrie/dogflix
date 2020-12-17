import React, { useEffect, useLayoutEffect, useRef, useState, memo } from 'react';
import {Footer} from '../splash';
import { emptyObject } from '../../util/helper';
import MoviePreviewContainer from '../movies/containers/movie_preview_container';
import MovieCarouselContainer from '../movies/containers/movie_carousel_container';

const Browse = ({genres, previewMovie, genreKeys, initializeCarousel, initializePreview}) => {
    
    useEffect( () => {
        if(emptyObject(previewMovie)){
            initializeCarousel();
            initializePreview();
        }
    }, [])

    return(
        <div className='browse-container'>
            <MoviePreviewContainer movie={previewMovie}/>
            <div className='carousel-background-container'>
                {genres.map((genre, idx) => {
                    return <MovieCarouselContainer 
                    key={genreKeys[idx]} 
                    genre={genre}
                    windowIDX={idx} 
                    />
                })}
            </div>
            <Footer />
        </div>
    )
};

const propComp = (prevProp, nextProp) => {

    nextProp.genres.forEach( (genre, idx)  => {
        if(prevProp.genres[idx] !== genre){
            return false;
        }
    })
    return prevProp.previewMovie.movie_clip === nextProp.previewMovie.movie_clip;
}


export default memo(Browse, propComp);