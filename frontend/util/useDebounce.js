import { useState, useEffect} from 'react';

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

export default useDebounced;