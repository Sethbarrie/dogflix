import React, {useEffect, useState, useRef} from 'react';
import { observeNavbar, unobserveNavbar} from '../../../util/observers';
import useTraceUpdate from '../../../util/useTraceUpdate';

const MoviePreview = (props) => {

    // useTraceUpdate(props, "MoviePreview");

    const [ volume, setVolume] = useState(false);
    // const [playing, setPlaying ] = useState(false);
    const moviePlayer = useRef();
    // const movieFlag = useRef(false);

    const clickPlay = () => {
        props.setCurrentMovie(props.movie);
        props.history.push({
            pathname: `/player/${props.movie.id}`,
            state: {movie: props.movie}
        })
    }

    // useEffect(() => {
    //     if(playing && !movieFlag.current){
    //         movieFlag.current = true;
    //         moviePlayer.current.play();
    //     }
    // }, [playing, setPlaying])

    useEffect(() => {
        observeNavbar();
        return () => {
            unobserveNavbar();
        }
    }, [])

    return(
        <div 
            className='movie-preview-container'
            // onMouseEnter={() => setPlaying(true)}
            >
            <video
            loop
            disablePictureInPicture
            poster={props.movie.cover_art}
            ref={moviePlayer}
            className='movie-preview'
            controlsList="nodownload"
            autoPlay
            muted>
                <source src={props.movie.movie_clip} type='video/webm'/>
            </video>
            <div id='movie-preview-filter'></div>
            
            <div className='button-container-left'>
                
                <button 
                        onClick={clickPlay}
                        className='movie-preview-play-button'>
                        <i className="material-icons">play_arrow</i>
                        Play
                </button>

                {/* <button 
                    onClick={() => console.log('you found a non working button')}
                    className='movie-preview-more-info-button'>
                        <i className="material-icons">info_outline</i>
                        More Info
                </button> */}

            </div>


            

            <div className='button-container-right'>
                
                <button 
                    onClick={() => setVolume(!volume)}
                    className='movie-preview-mute-button'>
                        { volume ? 
                        <i className="material-icons">volume_off</i>
                        :
                        <i className="material-icons">volume_up</i>
                        }
                </button>

                {props.movie.rating ?
                <span id='movie-preview-rating'>
                    {props.movie.rating === 'not rated' ? props.movie.rating : `rated ${props.movie.rating}`}
                </span>
                :null
                }

            </div>
        </div>
    )
};


export default MoviePreview;