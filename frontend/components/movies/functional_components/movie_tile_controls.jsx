import React, { memo } from 'react';

const MovieTileControls = ({movie, setCurrentMovie, history, hovering}) => {

    const clickPlay = () => {
        setCurrentMovie(movie);
        history.push({
            pathname: `/player/${movie.id}`,
        })
    }

    return(
        (movie && hovering)?
        <div 
            className='movie-tile-controls' 
            id={ hovering 
                ? 'hovered-movie-tile-controls' 
                : null
            }
        >
            <div className='movie-tile-button-container'>
                <i className="material-icons" onClick={clickPlay}>play_circle_filled</i>
                {/* <i className="material-icons" onClick={() => console.log('Seth is testing')}>play_circle_filled</i> */}
                <i className="material-icons" onClick={() => console.log("you clicked a button that doesn't work")}>expand_more</i>
            </div>
            <div className='movie-tile-info'>
                <div className='upper-movie-info'>
                    <span>{`${movie.matchPercent}% Match`}</span>
                    <span>{movie.rating}</span>
                    <span>{movie.year}</span>
                </div>
                <ul className='lower-movie-info'>
                    <li className='movie-descriptor'>{movie.descriptors[0]}</li>
                    <li className='movie-descriptor'>{movie.descriptors[1]}</li>
                    <li className='movie-descriptor'>{movie.descriptors[2]}</li>
                </ul>
            </div>
        </div>
        : null
    )
}

export default memo(MovieTileControls);