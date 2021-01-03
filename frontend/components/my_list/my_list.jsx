import React, {useState, useEffect} from 'react';
import MovieTileContainer from '../movies/containers/movie_tile_container';

function MyList(props){

    useEffect( () => {
        if(props.emptyCarousel){
            props.initializeCarousel();
        }

        if(!props.currentUser.movies || !props.movies){
            props.fetchFavorites(props.currentUser.id)
        }
    }, [])
    debugger
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
            :<div>
                <h1>My list is empty. Go pick out some movies!</h1>
            </div>
        }
        </div>
    )

}

export default MyList;


    
// useEffect( () => {
//     if(!genres.length){
//         initializeCarousel()
//         // .then(() => forceUpdate())
//     }
//     if(emptyObject(previewMovie)){
//         initializePreview()
//         // .then(() => forceUpdate())
//     }
// }, [])