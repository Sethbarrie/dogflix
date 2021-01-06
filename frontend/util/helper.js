import {RANDOM_DESCRIPTOR} from './random_descriptor';
import { RANDOM_GENRES } from './random_genres';
let keyArray = [];


//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
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
    if(!obj || obj.constructor !== Object){return obj};
    return (Object.keys(obj).length === 0);
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

export function createMovie(skeleton, descriptors, matchPercent, tileKey){
    skeleton.descriptors = descriptors || createDescriptors();
    skeleton.matchPercent = matchPercent || randomPercent();
    
    let tempTileKey = tileKey || randomKeyGen();
    let tempPlayerKey =  randomKeyGen();
    let tempControlKey =  randomKeyGen();
    
    skeleton.tileKey = tempTileKey;
    skeleton.playerKey = tempPlayerKey;
    skeleton.controlKey = tempControlKey;
    return skeleton;
}

export function createCarouselRow(skeletonArray, genre){
    let defaultGenre = genre || randomGenre();

    skeletonArray.map( movie => createMovie(movie));
    skeletonArray.genre = defaultGenre;
    skeletonArray.key = randomKeyGen();
    return skeletonArray;
}

export function arraysEqual(arr1, arr2){
    if(!arr1.every( ele => arr2.includes(ele))){
        return false;
    }
    return arr1.length === arr2.length;
}

function createDescriptors(){
    let flag = true;
    let returnArr = [];
    while(flag){
        returnArr = [randomDescriptor(), randomDescriptor(), randomDescriptor()];
        if(returnArr[0].length + returnArr[1].length + returnArr[2].length < 30){
            flag = false;
        }
    }

    return returnArr;
}