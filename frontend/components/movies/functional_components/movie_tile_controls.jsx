import React, { memo, useRef } from 'react';

const MovieTileControls = ({movie, setCurrentMovie, history, hovering, addMovieToFavorites, currentUser}) => {

    const movieDownloaded = useRef(!!movie.movie_clip);
    
    const clickPlay = () => {
        setCurrentMovie(movie);
        history.push({
            pathname: `/player/${movie.id}`,
        })
    }

    let expanded;

    if(movieDownloaded.current && hovering){
        expanded = true;
    } else {
        expanded = false;
    }
    debugger
    return(
        (expanded)?
        <div 
            className='movie-tile-controls' 
            id={ expanded 
                ? 'hovered-movie-tile-controls' 
                : null
            }
        >
            <div className='movie-tile-button-container'>
                <i className="material-icons" onClick={clickPlay}>play_circle_filled</i>
                <i className="material-icons" onClick={() => addMovieToFavorites(currentUser.id, movie.id)}>add_circle_outline</i>
                {/* <i className="material-icons" onClick={() => console.log("you clicked a button that doesn't work")}>expand_more</i> */}
            </div>
            <div className='movie-tile-info'>
                <div className='upper-movie-info'>
                    <span>{`${movie.matchPercent}% Match`}</span>
                    <span>{movie.rating}</span>
                    <span>{movie.year}</span>
                </div>
                <ul className='lower-movie-info'>
                    <li className='movie-descriptor'>{movie.descriptors[0]}</li>
                    <i className="material-icons">brightness_1</i>
                    <li className='movie-descriptor'>{movie.descriptors[1]}</li>
                    <i className="material-icons">brightness_1</i>
                    <li className='movie-descriptor'>{movie.descriptors[2]}</li>
                </ul>
            </div>
        </div>
        : null
    )
}

function compFunc(prevProps, nextProps){
    
}


export default memo(MovieTileControls, compFunc);
// export default MovieTileControls;