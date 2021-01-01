import {
    INITIALIZE_CAROUSEL,
    ADD_CAROUSEL_ROW,
    RECEIVE_MOVIE,
    // ADD_FAVORITES_ROW
} from '../actions/movie_actions';

import {
    UPDATE_FAVORITES
} from '../actions/user_actions';

import { 
    shuffle,
    getRandomInt, 
    randomPercent,
    randomGenre, 
    randomDescriptor,
    randomKeyGen, 
    createCarouselRow,
    createMovie
} from '../util/helper';

const carouselReducer = (initialState = {}, action) => {

    Object.freeze(initialState);
    let genre;
    let newCarousel;
    let newRow;
    let carouselValues;
    let genreKeys;

    switch(action.type){
        case INITIALIZE_CAROUSEL: //
            newCarousel = {...initialState};
            carouselValues = Object.values(action.movies);
            for(let i = 0; i < 4; i++){
                newRow = createCarouselRow(shuffle(carouselValues).slice(0, 24));
                newCarousel[newRow.genre] = newRow;
            }
            return newCarousel;
        case ADD_CAROUSEL_ROW: //
            carouselValues = Object.values(action.movies);
            newRow = createCarouselRow(shuffle(carouselValues).slice(0, 24));
            newCarousel = {...initialState, [newRow.genre]: newRow};
            return newCarousel;
        case UPDATE_FAVORITES://
            newRow = createCarouselRow(shuffle(action.movies));
            newCarousel = {...initialState, 'My List': newRow};
            return newCarousel;
        case RECEIVE_MOVIE:
            newCarousel = {};
            Object.keys(initialState).forEach( genreName => {
                newCarousel[genreName] = initialState[genreName].map( movie => {
                    if(movie.id === action.movie.id){
                        // return reReceiveMovie(movie, action.movie);
                        return createMovie(action.movie, movie.descriptors, movie.matchPercent, movie.key[0]);
                    } else {
                        return movie;
                    }
                })
            })
            return newCarousel;
        default:
            return initialState;
    }
}

export default carouselReducer;




//         case ADD_FAVORITES_ROW:
//             newRow = createCarouselRow(shuffle(carouselValues).slice(0, 24), 'My List');
//             newCarousel = {...initialState, 'My List': newRow}
//             return newCarousel;
//         case UPDATE_FAVORITES:
//             newCarousel = {...initialState, 'My List': action.userList}
//             newCarousel['My List'].map( movie => {
//                 movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()];
//                 movie.descriptors = [randomDescriptor(), randomDescriptor(), randomDescriptor()];
//                 movie.matchPercent = randomPercent();
//             });
//             newCarousel['My List'].key = randomKeyGen();
//             return newCarousel;

//         case RECEIVE_MOVIE:
//             newCarousel = {};
//             Object.keys(initialState).forEach( genreName => {
//                 newCarousel[genreName] = initialState[genreName].map( movie => {
//                     if(movie.id === action.movie.id){
//                         let newMovie = Object.assign( {} , action.movie);
//                         newMovie.descriptors = movie.descriptors;
//                         newMovie.matchPercent = movie.matchPercent;
//                         // newMovie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()];
//                         newMovie.key = [movie.key[0]];
//                         let tempArr = [randomKeyGen(), randomKeyGen()];
//                         newMovie.key = newMovie.key.concat(tempArr);
//                         return newMovie;
//                     } else {
//                         return movie;
//                     }
//                 })
//             })
//             return newCarousel;
//         default:
//             return initialState;
//     }
// }

// export default carouselReducer;