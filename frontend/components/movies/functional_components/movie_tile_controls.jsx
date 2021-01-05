import React, { memo, useRef } from 'react';

const MovieTileControls = (props) => {

    const {movie, setCurrentMovie, history, hovering, addMovieToFavorites, removeMovieFromFavorites, currentUser, favorited} = props
    const movieDownloaded = useRef(!!movie.movie_clip);
    const popupInfoDiv = useRef();
    
    const clickPlay = () => {
        setCurrentMovie(movie);
        history.push({
            pathname: `/player/${movie.id}`,
        })
    }

    const handleClick = () => {
        if(favorited){
            removeMovieFromFavorites(currentUser.id, movie.id);
        } else {
            addMovieToFavorites(currentUser.id, movie.id);
        }
    }

    const handleHover = () => {
        popupInfoDiv.current.id = 'visible-popup-favorites-info';
    }

    const handleNotHover = () => {
        popupInfoDiv.current.id = null;
    }


    let expanded;

    if(movieDownloaded.current && hovering){
        expanded = true;
    } else {
        expanded = false;
    }
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
                <i 
                    className="material-icons" 
                    onClick={clickPlay}>
                        play_circle_filled
                </i>
                <i 
                    className="material-icons"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleNotHover} 
                    onClick={handleClick}>
                        {favorited ? 'remove_circle_outline' : 'add_circle_outline'}
                </i>
                {/* <div className='favorites-popup-container'> */}
                    <div className={favorited ? 'on-favorites-list' : 'off-favorites-list'} ref={popupInfoDiv}>
                        {favorited ? "Remove from My List" : "Add to My List"}
                        <i className="material-icons">signal_cellular_4_bar</i>
                    </div>
                {/* </div> */}
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


// export default memo(MovieTileControls, compFunc);
export default MovieTileControls;