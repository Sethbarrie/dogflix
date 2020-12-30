// import {
//     INITIALIZE_CAROUSEL,
//     ADD_CAROUSEL_ROW,
//     RECEIVE_MOVIE,
//     ADD_FAVORITES_ROW
// } from '../actions/movie_actions';

// import {
//     UPDATE_FAVORITES
// } from '../actions/user_actions';

// import { 
//     shuffle,
//     getRandomInt, 
//     randomPercent,
//     randomGenre, 
//     randomDescriptor,
//     randomKeyGen 
// } from '../util/helper';

// const carouselReducer = (initialState = {}, action) => {

//     Object.freeze(initialState);
//     let genre;
//     let newCarousel;
//     let carouselValues;
//     let genreKeys;

//     switch(action.type){
//         case INITIALIZE_CAROUSEL:
//             newCarousel = {...initialState};
//             carouselValues = Object.values(action.movies).map( movie => {
//                 movie.matchPercent = randomPercent();
//                 movie.descriptors = [randomDescriptor(), randomDescriptor(), randomDescriptor()];
//                 return movie;
//             });
//             for(let i = 0 ; i < 4 ; i ++ ){
//                 let genre = randomGenre();
//                 newCarousel[genre] = (shuffle(carouselValues).slice(0, 24));
//                 newCarousel[genre].map(movie => movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]);
//                 newCarousel[genre].key = randomKeyGen();
//             };
//             return newCarousel;
//         case ADD_CAROUSEL_ROW:
//             carouselValues = Object.values(action.movies);
//             genre = randomGenre();
//             newCarousel = {...initialState, genre: (shuffle(carouselValues).slice(0, 24))};
//             newCarousel[genre].map( movie => {movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]});
//             newCarousel[genre].key = randomKeyGen();
//             return newCarousel;
//         case ADD_FAVORITES_ROW:
//             // carouselValues = Object.values(action.movies);
//             // let favoriteList = action.list.map( movieId => action.movies.movieId);
//             // newCarousel = {...initialState, myList: favoriteList};
//             // newCarousel.myList.map( movie => {movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]});
//             // newCarousel.myList.key = randomKeyGen();
//             // return newCarousel;
//             newCarousel = {...initialState, 'My List': action.list}
//             newCarousel['My List'].map( movie => {movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]});
//             newCarousel['My List'].key = randomKeyGen();
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
















import {
    INITIALIZE_CAROUSEL,
    ADD_CAROUSEL_ROW,
    RECEIVE_MOVIE,
    ADD_FAVORITES_ROW
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
    randomKeyGen 
} from '../util/helper';

const carouselReducer = (initialState = {}, action) => {

    Object.freeze(initialState);
    let genre;
    let newCarousel;
    let carouselValues;
    let genreKeys;

    switch(action.type){
        case INITIALIZE_CAROUSEL:
            newCarousel = {...initialState};
            carouselValues = Object.values(action.movies)
            for(let i = 0 ; i < 4 ; i ++ ){
                newCarousel[genre] = (shuffle(carouselValues).slice(0, 24));
            };
            return newCarousel;
        case ADD_CAROUSEL_ROW:
            carouselValues = Object.values(action.movies);
            genre = randomGenre();
            newCarousel = {...initialState, genre: (shuffle(carouselValues).slice(0, 24))};
            newCarousel[genre].map( movie => {movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]});
            newCarousel[genre].key = randomKeyGen();
            return newCarousel;
        case ADD_FAVORITES_ROW:
            // carouselValues = Object.values(action.movies);
            // let favoriteList = action.list.map( movieId => action.movies.movieId);
            // newCarousel = {...initialState, myList: favoriteList};
            // newCarousel.myList.map( movie => {movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]});
            // newCarousel.myList.key = randomKeyGen();
            // return newCarousel;
            newCarousel = {...initialState, 'My List': action.list}
            newCarousel['My List'].map( movie => {movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()]});
            newCarousel['My List'].key = randomKeyGen();
            return newCarousel;
        case UPDATE_FAVORITES:
            newCarousel = {...initialState, 'My List': action.userList}
            newCarousel['My List'].map( movie => {
                movie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()];
                movie.descriptors = [randomDescriptor(), randomDescriptor(), randomDescriptor()];
                movie.matchPercent = randomPercent();
            });
            newCarousel['My List'].key = randomKeyGen();
            return newCarousel;
        case RECEIVE_MOVIE:
            newCarousel = {};
            Object.keys(initialState).forEach( genreName => {
                newCarousel[genreName] = initialState[genreName].map( movie => {
                    if(movie.id === action.movie.id){
                        let newMovie = Object.assign( {} , action.movie);
                        newMovie.descriptors = movie.descriptors;
                        newMovie.matchPercent = movie.matchPercent;
                        // newMovie.key = [randomKeyGen(), randomKeyGen(), randomKeyGen()];
                        newMovie.key = [movie.key[0]];
                        let tempArr = [randomKeyGen(), randomKeyGen()];
                        newMovie.key = newMovie.key.concat(tempArr);
                        return newMovie;
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