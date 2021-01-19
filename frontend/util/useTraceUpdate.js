import React, { useRef, useEffect } from 'react';


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

export default useTraceUpdate;


//https://stackoverflow.com/questions/41004631/trace-why-a-react-component-is-re-rendering
//Shoutout to Jacob Rask for a very clean implementation of a React trace for debugging