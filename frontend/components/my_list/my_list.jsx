import React, {useState, useEffect} from 'react';
import MovieTileContainer from '../movies/containers/movie_tile_container';
import {Footer} from '../splash';

function MyList(props){

    useEffect( () => {
        //Autoscroll to top on page render
        window.scrollTo(0,0);

        if(props.emptyCarousel){
            props.initializeCarousel();
        }

        if(!props.currentUser.movies || !props.movies){
            props.fetchFavorites(props.currentUser.id)
        }
    }, [])

    return (
        <div className='myListContainer'>
            <h1 className='myListHeader'>My List</h1>
            
            {props.movies.length 
            ? <div className='myListTilesContainer'>
                {props.movies.map( (movie, idx) => {
                    return <MovieTileContainer 
                        movieId={idx}
                        genre={'My List'}
                        key={movie.key[0]}
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

export default MyList;