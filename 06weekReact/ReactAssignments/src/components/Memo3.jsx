import { useState, useMemo } from "react";

// let idx=1;
export default function Memo3() {
    const [items, setItems] = useState([
        {name: 'Chocolate', value: 120},
        {name: 'Chips', value: 20},
        {name: 'Fun', value: 5},
        {name: 'Bread', value: 55},
    ]) 

    // const totalAmount = useMemo(()=>{
    //     let amt=0;
    //     for(let i=0; i<items.length; i++){
    //         amt += items[i].value;
    //     }
    //     return amt
    // }, [items])

    const totalAmount = useMemo(()=>{
        return items.reduce((sum, item)=> sum+item.value, 0) // initial sum = 0
    }, [items])

    return ( 
        <div><ul>
            {items.map((item, idx)=> {
                return <li key={idx}>{item.name} - Price: ${item.value}</li>
            })}
            </ul>
        <p>Bill: {totalAmount}</p>
        </div>
     );
}
