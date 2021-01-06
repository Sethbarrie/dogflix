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
