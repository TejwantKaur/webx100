import {useState, useMemo} from 'react';

function Memo1() {
    const [input, setInput] = useState(0)
    
    const fact = useMemo(()=> {
        let dp = new Array(input+1);
        dp[0] = 1; 
        dp[1] = 1;
        for(let i=2; i<=input; i++){
            dp[i] = i * dp[i-1];
        }
        return dp[input]
    }, [input])

    return (
        <div>
            <input type="text" onChange={(e)=> setInput(Number(e.target.value))}/>
            <div>Fact of {input} = {fact} </div>
        </div>
      );
}

export default Memo1;
