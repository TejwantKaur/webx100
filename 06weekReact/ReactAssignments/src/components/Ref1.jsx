import { useEffect, useRef } from "react";


export default function Ref1() {
    const inputRef = useRef();

    useEffect(()=> {
        inputRef.current.focus()
    }, []) // whenever refreshes; focus automatically

    const handleBtnClick = useEffect(() => {
        inputRef.current.focus() // when we click
    })

    return ( 
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text"/>
            <button onClick={handleBtnClick}> Focus Input</button>
        </div>
     );
}

