import { useState, useRef, useEffect } from 'react';



function useAsyncCall(startValue, callFunction, callData ,callTrigger){

    const [value, setValue] = useState(startValue);
    const triggered = useRef(false);

    useEffect(() => {
        if(callTrigger && !triggered.current){
            triggered.current = true;
            callFunction(callData).then( newValue => setValue(newValue))
        }
    }, [callTrigger]);

    return [value, triggered];
};

export default useAsyncCall;