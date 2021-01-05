import React, {useEffect, memo} from 'react';
import MovieTileContainer from '../movies/containers/movie_tile_container';
import {Footer} from '../splash';
import {arraysEqual} from '../../util/helper';
import useTraceUpdate from '../../util/useTraceUpdate';

function MyList(props){

    // useTraceUpdate(props, 'MyListComponent');
    const {emptyCarousel, initializeCarousel, currentUser, fetchFavorites, movieKeys} = props;

    useEffect( () => {
        //Autoscroll to top on page render
        window.scrollTo(0,0);
        if(emptyCarousel){
            initializeCarousel();
        }

        if(!currentUser.movies || !movieKeys){
            fetchFavorites(currentUser.id).then( () => {})
        }
    }, [])

    return (
        <div className='myListContainer'>
            <h1 className='myListHeader'>My List</h1>
            
            {movieKeys.length 
            ? <div className={movieKeys.length < 6 ? 'myListTilesContainerUnder6' : 'myListTilesContainerOver6'}>
                {movieKeys.map( (movieKey, idx) => {
                    return <MovieTileContainer 
                        movieId={idx}
                        genre={'My List'}
                        key={movieKey}
                    />
                })}
            </div>
            :<div className='myEmptyListTilesContainer'>
                <h1>My list is empty. Go pick out some movies!</h1>
            </div>
        }
        <Footer />
        </div>
    )

}

function compareMovieKeys(prevProps, nextProps){
    return arraysEqual(prevProps.movieKeys, nextProps.movieKeys);
    if(prevProps.movieKeys.every( movieKey1 => nextProps.movieKeys.includes(movieKey1)) && nextProps.movieKeys.every( movieKey2 => prevProps.movieKeys.includes(movieKey2))){
        return true;
    } else {
        return false;
    }
}

export default memo(MyList, compareMovieKeys);
