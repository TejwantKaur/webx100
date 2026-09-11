import { useRef, useState } from "react";


export default function Ref2() {
    const [count, setCount] = useState(0);
    const reRendered = useRef(0)

    const handleBtn = () => { // function handlebtn()
        setCount(count+1)
    }

    reRendered.current = reRendered.current+1;
    return ( 
        <div>
            <div>ReRendered {reRendered.current} times</div>
            <button onClick={handleBtn}>counter</button>
        </div>
     );
}

