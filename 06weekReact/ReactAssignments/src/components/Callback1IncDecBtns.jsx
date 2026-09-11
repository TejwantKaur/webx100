import { memo, useCallback, useMemo, useState } from "react";

function Callback1IncDecBtns() {
    const [count, setCount] = useState(0)

    // function handleInc(){
    //     setCount(count+1)
    // }
    // const handleDec = () => setCount(count-1);
    // function handleDec(){
    //     setCount(count-1)
    // }

    const handleInc = useCallback(() => {
        setCount((c) => c+1)
    },[]); 
    const handleDec = useCallback(() => {
        setCount((c) => c-1)
    },[]);

    return ( 
        <div>
            <Buttons increment={handleInc} decrement={handleDec}/>
            <div>Counter {count}</div> 
        </div>
    );
}

// this should'nt re-render when count val is updated;
// memo: lets up skips re-rendering when props are unchanged
const Buttons = memo(({ increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
})

export default Callback1IncDecBtns;


