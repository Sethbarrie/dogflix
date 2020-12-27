import React, { useRef, useEffect } from 'react';


function useTraceUpdate(props, component) {
    const prev = useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
        if (prev.current[k] !== v) {
            ps[k] = [prev.current[k], v];
        }
            return ps;
        }, {});
        if (Object.keys(changedProps).length > 0) {
            console.log(`Changed props in ${component}:`, changedProps);
        }
        prev.current = props;
    });
}

export default useTraceUpdate;


//https://stackoverflow.com/questions/41004631/trace-why-a-react-component-is-re-rendering
//Shoutout to Jacob Rask for a very clean implementation of a React trace for debugging