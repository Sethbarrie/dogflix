let navbarObserver;

export const observeNavbar = () => {
    navbarObserver  = new IntersectionObserver(darkenNavbar, navbarOptions);
    navbarObserver.observe(document.getElementsByClassName('movie-preview-container')[0]); 
}
export const unobserveNavbar = () => {
    let navbar = document.getElementsByClassName('navbar')[0];
    navbar.style.backgroundColor = 'transparent';
    navbarObserver.unobserve(document.getElementsByClassName('movie-preview-container')[0]); 
}
const navbarOptions = {
    root: document.getElementsByClassName('movie-preview-container')[0],
    rootMargin: '0px',
    threshold: .9
}
const darkenNavbar = (entries) => {
    for(let entry of entries){
        if(!entry.isIntersecting){
            let nav = document.getElementsByClassName('navbar')[0];
            nav.style.transition = '.3s';
            nav.style.backgroundColor = 'black';
            nav.style.easing = 'linear';
        } else {
            let nav2 =  document.getElementsByClassName('navbar')[0];
            nav2.style.transition = '1s';
            nav2.style.backgroundColor = 'transparent';
            nav2.style.transitionDelay = '.5s';
            nav2.style.easing = 'linear';
        }
    }
}

/////////////////////////////////////////////////////

let screenCount = 0;
let movieCarouselObserver;

export function updateScreen( newScreen ){
    screenCount = newScreen;
}
export function observeCarouselSize(){
    movieCarouselObserver = new ResizeObserver((entries) => throttleCallback(resizeCarousel, entries) );
    movieCarouselObserver.observe(document.querySelector('body'));
}
export function unobserveCarouselSize(){
    movieCarouselObserver.unobserve(document.querySelector('body'));
}

function resizeCarousel(entries){

    for (let entry of entries){
        
        let screenSlideSize = ((entry.contentRect.width * .153) * 6) + 29;

        let carousels = document.getElementsByClassName('carousel-window');
        Array.from(carousels).forEach( carousel => {
            //Wrote as a variable just in case I wanted to cancel it later
            let animation = carousel.animate([{
                transform: `translate(-${screenCount * screenSlideSize}px, 0)`
            }], {
                duration: 1,
                iterations: 1,
                delay: 0,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                direction: 'normal',
                fill: 'both',
                endDelay: 100
            });
        })
    }
};


/////////////////////////////////////////////////////////////////

function throttleCallback( callback, entries, timeout = 500){

    const throttledCallback = setTimeout( () => {
        return callback(entries);
    }, timeout)

    return () => {
        clearTimeout(throttledCallback);
    }
}

function last( arr ){
    return arr[arr.length - 1];
}

/////////////////////////////////////////////////////////////////////

let lastCarousel;
let getListFunc;
let userId;
let gotList = false;

export const observeLastCarousel = (func, id) => {
    userId = id;
    getListFunc = func;
    lastCarousel = new IntersectionObserver(getList, listOptions);
    lastCarousel.observe(last(Array.from(document.getElementsByClassName('movie-carousel-container'))))
}

export const unobserveLastCarousel = () => {
    lastCarousel.unobserve(last(Array.from(document.getElementsByClassName('movie-carousel-container'))))
}


const getList = (entries) => {
    for(let entry of entries){
        if(!gotList && entry.isIntersecting){
            gotList = true;
            getListFunc(userId);
        }
    }
}

const listOptions = {
    root: last(Array.from(document.getElementsByClassName('movie-carousel-container'))),
    rootMargin: '0px',
    threshold: .7
}