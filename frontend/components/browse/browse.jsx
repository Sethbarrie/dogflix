import React, { useEffect, useLayoutEffect, useRef, useState, memo, Profiler } from 'react';
import {Footer} from '../splash';
import { emptyObject, arraysEqual } from '../../util/helper';
import MoviePreviewContainer from '../movies/containers/movie_preview_container';
import MovieCarouselContainer from '../movies/containers/movie_carousel_container';
import useTraceUpdate from '../../util/useTraceUpdate';
import profileWriter from '../../util/profileWriter';
import {useForceUpdate} from '../../util/useForceUpdate';

const Browse = props => {
    
    const {
        genres, 
        previewMovie, 
        genreKeys, 
        initializeCarousel, 
        initializePreview
    } = props;
    
    // useTraceUpdate(props, "Browse");
    // let forceUpdate = useForceUpdate();
    
    useEffect( () => {
        if(!genres.length){
            initializeCarousel()
            // .then(() => forceUpdate())
        }
        if(emptyObject(previewMovie)){
            initializePreview()
            // .then(() => forceUpdate())
        }
    }, [])

    
    return(
        <div className='browse-container'>
            {/* <Profiler id="MoviePreview" onRender={profileWriter}> */}
                <MoviePreviewContainer movie={previewMovie}/>
            {/* </Profiler> */}
            <div className='carousel-background-container'>
                {genres.map((genre, idx) => {
                    if(genre === 'My List'){
                        return(
                            <MovieCarouselContainer 
                                key={genreKeys[idx]} 
                                genre={genre}
                                windowIDX={idx}
                            />
                        )
                    } else {
                        // <Profiler id={`${genre} carousel`} onRender={profileWriter}>
                        return(
                            <MovieCarouselContainer 
                                key={genreKeys[idx]} 
                                genre={genre}
                                windowIDX={idx}
                                carouselTempLength={24} 
                            />
                        )

                        // </Profiler>
                    }

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

    if(!arraysEqual(prevProp.genres, nextProp.genres)){
        return false;
    }

    let flag1 = !!nextProp.previewMovie.movie_clip;
    let flag2 = prevProp.previewMovie.movie_clip !== nextProp.previewMovie.movie_clip;
    if( flag1 && flag2){
        return false;
    } else {
        return true;
    }
}


export default memo(Browse, propComp);
// export default Browse;