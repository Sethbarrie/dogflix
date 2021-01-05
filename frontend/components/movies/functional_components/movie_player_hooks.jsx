import React, {useState, useEffect} from 'react';
import { emptyObject } from '../../../util/helper';


function MoviePlayerHooks(props){

    const [play, setPlaying] = useState(false);
    useEffect(() => {
        if(emptyObject(props.movie)){
            props.fetchMovie(props.match.params.movieId)
            .then(movie => {
                props.setCurrentMovie(movie);
            })
        }
    },[])
    
    // if(props.movie === undefined){
    //     return null
    // }
    return(
        <video
            className='movie-player'
            id='fullscreen-movie-player'
            // ref={video}
            disablePictureInPicture
            controlsList="nodownload"
            controls
            autoPlay
            >
                <source src={props.movie.movie_clip} type='video/webm'/>
        </video>        
    )

};

export default MoviePlayerHooks;