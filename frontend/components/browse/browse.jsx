import React, { useEffect, useLayoutEffect, useRef, useState, memo, Profiler } from 'react';
import {Footer} from '../splash';
import { emptyObject } from '../../util/helper';
import MoviePreviewContainer from '../movies/containers/movie_preview_container';
import MovieCarouselContainer from '../movies/containers/movie_carousel_container';
import useTraceUpdate from '../../util/useTraceUpdate';
import profileWriter from '../../util/profileWriter';

const Browse = props => {
    
    const {genres, previewMovie, genreKeys, initializeCarousel, initializePreview} = props;

    // useTraceUpdate(props, "Browse");
    
    useEffect( () => {
        if(emptyObject(previewMovie)){
            initializePreview();
            initializeCarousel();
        }
    }, [])

    return(
        <div className='browse-container'>
            {/* <Profiler id="MoviePreview" onRender={profileWriter}> */}
                <MoviePreviewContainer movie={previewMovie}/>
            {/* </Profiler> */}
            <div className='carousel-background-container'>
                {genres.map((genre, idx) => {
                    return(
                    // <Profiler id={`${genre} carousel`} onRender={profileWriter}>
                        <MovieCarouselContainer 
                        key={genreKeys[idx]} 
                        genre={genre}
                        windowIDX={idx} 
                        />
                    // </Profiler>
                    )
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
    let flag1 = !!nextProp.previewMovie.movie_clip;
    let flag2 = prevProp.previewMovie.movie_clip !== nextProp.previewMovie.movie_clip;
    if( flag1 && flag2){
        return false;
    } else {
        return true;
    }
}


export default memo(Browse, propComp);