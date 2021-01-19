# <img src="https://github.com/Sethbarrie/FullStackProject/blob/main/app/assets/images/dogflix-logo.png" align="center" width="400" height="220"></img>

 ### [Dogflix](https://sethb-dogflix.herokuapp.com/#/)
 
***

Dogflix is the best streaming site to leave on for your pets while you are at work. Intuitive UI and lots of content so your pet never gets bored.

Technologies used: 
![](https://img.shields.io/badge/Front_End-Javascript-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Front_End-React.js-informational?style=flat&logo=react&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Back_End-Ruby_on_Rails-informational?style=flat&logo=ruby-on-rails&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/State_Management-redux-informational?style=flat&logo=redux&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Framework-React_Router-informational?style=flat&logo=react-router&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Styling-Sass-informational?style=flat&logo=sass&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/HTTP_Requests-Jquery-informational?style=flat&logo=jquery&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Data_Hosting-AWS-informational?style=flat&logo=amazon-aws&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Database-postgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Cloud_Deployment-Heroku-informational?style=flat&logo=heroku&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Version_Control-Git-informational?style=flat&logo=git&logoColor=white&color=2bbc8a)


# Steps to using Dogflix

### Step 1:

> Sign up.


<img src="https://github.com/Sethbarrie/dogflix/blob/main/app/assets/images/dogflix-demo1.jpg" align="left" width="1500" height="600" background='cover'></img>


That's it. You are all ready to start leaving your pets at home guilt-free.

***

## Features:
* Easy to sign-in/sign-up.
* Many categories to choose from.
* Movie previews by hovering.
* Turn off auto-play if that isn't your thing.
* Stream all in the browser, no need for other services.

### Users are able to scroll through movies without navigating from the page, for endless decisions.
***



<img src="https://github.com/Sethbarrie/dogflix/blob/main/app/assets/images/dogflix-demo2.jpg" align="center" width="1300" height="500" background='cover' padding-bottom='20' margin-bottom='20'></img>





### Users can save movies to watch later in their list.
***





<img src="https://github.com/Sethbarrie/dogflix/blob/main/app/assets/images/dogflix-demo3.jpg" align="center" width="1300" height="500" background='cover' padding-bottom='20' margin-bottom='20'></img>





### Dynamic hovering for quick menu over movies you are interested in.
***


Using custom react and redux hooks.
```
const useDebounced = (value, delayOn, delayOff) => {

    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect( () => {
        let handler;
        if(value){
            handler = setTimeout(() => {
                setDebounceValue(value);
            }, delayOn);
        } else {
            handler = setTimeout(() => {
                setDebounceValue(value);
            }, delayOff)
        }
        return () => {
            clearTimeout(handler);
        }
    }, [value, delayOn, delayOff] );
    return debouncedValue;
}

function AntiFlickerImage(props){
    
    const coverImg = useSelector( state => state.carousel[props.genre][props.movieId].cover_art);   

    return(
        <img
            className='anti-flicker-image' 
            src={coverImg}/>
    )
}
```

Using new APIs like ResizeObserver,

```
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
```
and IntersectionObserver.
```
let navbarObserver;

export const observeNavbar = () => {
    navbarObserver  = new IntersectionObserver(darkenNavbar, navbarOptions);
    navbarObserver.observe(document.getElementsByClassName('movie-preview-container')[0]); 
}
export const unobserveNavbar = () => {
    let navbar = document.getElementsByClassName('navbar')[0];
    navbar.style.transition = '1ms';
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
```

Memoization in many heavy components to prevent costly rerenders.

```
function compareMovieKeys(prevProps, nextProps){
    return arraysEqual(prevProps.movieKeys, nextProps.movieKeys);
}

const propComp = (prevProp, nextProp) => {

    nextProp.genres.forEach( (genre, idx)  => {
        if(prevProp.genres[idx] !== genre){
            return false;
        }
    })

    if(!arraysEqual(prevProp.genres, nextProp.genres)){
        return false;
    }

    let flag1 = !!nextProp.previewMovie.movie_clip;
    let flag2 = prevProp.previewMovie.movie_clip !== nextProp.previewMovie.movie_clip;
    if( flag1 && flag2){
        return false;
    } else {
        return true;
    }
}

const propComp = (prevProp, nextProp) => {

    if(prevProp.hovering !== nextProp.hovering) return false;
    if(prevProp.movie.movie_clip === undefined && nextProp.movie.movie_clip !== undefined) return false;
    return true;

}
```
Lots of tools for debugging.
```
function useTraceUpdate(props, component) {
    const prev = useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((acc, [key, value]) => {
        if (prev.current[key] !== value) {
            acc[key] = [prev.current[key], value];
        }
            return acc;
        }, {});
        if (Object.keys(changedProps).length) {
            console.log(`Changed props in ${component}:`, changedProps);
        }
        prev.current = props;
    });
}
function profileWriter(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
) {

    console.log(`${id} has ${phase === "mount" ? "mounted" : "updated"}, actualDuration: ${actualDuration}ms, baseDuration: ${baseDuration}ms, startTime: ${startTime}ms, commitTime: ${commitTime}ms`)
    console.log(interactions);
}
```
