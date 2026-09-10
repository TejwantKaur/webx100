import { useMemo, useState } from "react";

function App09Input() {
    const [count, setCount] = useState(0)
    // const [sum, setSum] = useState(0)
    const [input, setInput] = useState(1)

    // function sumFunc(e){
    //     console.log(e.target.value);
    //     let val = parseInt(e.target.value);

    //     console.log(val*(val+1))
    //     setSum((val*(val+1))/2)
    // }

    const sum = useMemo(()=>{
        let parsedInput = parseInt(input)
        return (parsedInput*(parsedInput+1))/2 // n*n+1/2
    }, [input]) // runs only when input val changes; due to memo
    // now doesnt render when counter is re-rendered;

    return ( 
        <div>
            <input type="text" onChange={(e)=> setInput(e.target.value)}/>
            <div>Sum from 1 to {input} = {sum}</div>
            <button onClick={()=>setCount(count+1)}>counter {count}</button>
        </div>
     );
}

export default App09Input;