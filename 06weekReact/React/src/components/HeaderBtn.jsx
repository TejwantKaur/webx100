import {useState} from 'react';

import Header from "./Header";

function HeaderBtn() {
    const [num, setNum] = useState("Hi HelloWorld");
    function RandomNum() {
        setNum("Hi " + Math.random());
    }
    return ( 
        <>
            <button onClick={RandomNum}>Random num</button>
            <Header title={num} />
        </>
     );
}

export default HeaderBtn;