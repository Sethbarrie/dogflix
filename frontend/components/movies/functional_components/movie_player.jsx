import React from 'react';


class MoviePlayer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            play: false
        }
        this.playDelay = this.playDelay.bind(this);
    }

    componentDidMount(){
        if(this.emptyObject(this.props.movie)){
            this.props.fetchMovie(this.props.match.params.id)
            .then(movie => {
                this.props.setCurrentMovie(movie);
            })
        }
    }

    
    componentDidUpdate(){
        if(this.emptyObject(this.props.movie)){
            this.props.fetchMovie(this.props.match.params.id)
            .then(movie => {
                this.props.setCurrentMovie(movie);
            })
        }
    }
    
    emptyObject(obj){
        return (Object.keys(obj).length === 0 && obj.constructor === Object);
    }

    playDelay(){
        setTimeout(() => {
            this.setState({play: true})
        }, 1000)
    }
    
    render(){
        if(this.props.movie === undefined){
            return null
        }
        return(
            <video
                onCanPlay={this.playDelay}
                className='movie-player'
                id='fullscreen-movie-player'
                // ref={this.video}
                disablePictureInPicture
                controlsList="nodownload"
                controls
                autoPlay={this.state.play}
                >
                    <source src={this.props.movie.movie_clip} type='video/webm'/>
            </video>        
        )
    }

};

export default MoviePlayer;