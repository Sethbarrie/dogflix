import React, {useState, useEffect} from 'react';
import MovieCarouselContainer from '../movies/containers/movie_carousel_container';
import { useForceUpdate } from '../../util/useForceUpdate';


function MyList(props){


    return(
        <MovieCarouselContainer 
            key={props.myList.key} 
            genre={'My List'} 
            windowIDX={props.windowIDX} 
            carouselLength={props.myList.length}
        /> 
    )
}


export default MyList;