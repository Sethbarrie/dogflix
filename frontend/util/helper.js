import {RANDOM_DESCRIPTOR} from './random_descriptor';
import { RANDOM_GENRES } from './random_genres';
let keyArray = [];

export const shuffle = (array) => {        
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const randomPercent = () => {
    return Math.floor(Math.random() * (100 - 90) + 90);
}


export const emptyObject = (obj) => {
    return (Object.keys(obj).length === 0 && obj.constructor === Object);
};


export const randomDescriptor = () =>{
    return RANDOM_DESCRIPTOR[getRandomInt(RANDOM_DESCRIPTOR.length)];
}

export const randomGenre = () =>{
    return RANDOM_GENRES[getRandomInt(RANDOM_GENRES.length)];
}


export const randomKeyGen = () => {
    let flag = true;

    let key;
    while(flag){
        let nums = getRandomInt(100000000);
        let letters = getRandomLetters();
        key = `${letters}${nums}`;
        if(!keyArray.includes(key)){
            keyArray.push(key);
            flag = false;
        }
    }
    return key;
}

const getRandomLetters = () => {
    let returnString = '';
    let letterArray = ('abcdefghijklmnopqrstuvwxyz').split('');
    for(let i = 0; i < 20; i++){
        returnString += letterArray[getRandomInt(25)];
    }
    return returnString;
}



export function animateLeft(screenNum, windowIDX){
    let tile = document.getElementById(`carousel-window-${windowIDX}`);

    let screenSlideSize = ((window.innerWidth * .153) * 6) + 29;

    let animation = tile.animate([{
        transform: `translate(-${(screenNum - 1) * screenSlideSize}px, 0)`
    }, {
        transform: `translate(-${screenNum * screenSlideSize}px, 0)`
    }], {
        duration: 1000,
        iterations: 1,
        delay: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        direction: 'normal',
        fill: 'both',
        endDelay: 100
    }); 
}


export function animateRight(screenNum, windowIDX){
    let tile = document.getElementById(`carousel-window-${windowIDX}`);

    let screenSlideSize = ((window.innerWidth * .153) * 6) + 29;

    let animation = tile.animate([{
        transform: `translate(-${(screenNum + 1) * screenSlideSize}px, 0)`
    }, {
        transform: `translate(-${screenNum * screenSlideSize}px, 0)`
    }], {
        duration: 1000,
        iterations: 1,
        delay: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        direction: 'normal',
        fill: 'both'
    }); 

}