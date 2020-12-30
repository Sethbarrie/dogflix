import { useState, useCallback } from 'react'

export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

//https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
//Had a similar function, took it out to use as a hook. Bad practice to use but I will find the 
//Work around later