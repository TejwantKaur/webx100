import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
        <CountRender />
        <Buttons setCount={setCount} />
    </div>
  )
}

function CountRender(){
    const count = useContext(CountContext)

    return <div>{count}</div>
}

function Buttons({setCount}) {
    const count = useContext(CountContext)
    
    const handleInc = () => { setCount(count+1) };
    const handleDec = () => { setCount(count-1) };
    return (
        <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        </div>
    );
}

export default App;
