import { useState} from "react";
import Header from "./components/Header";

function App02StopRerendering() { // memo; lets up skip re-rendering;
  const [num, setNum] = useState("Hi HelloWorld");
  
  function RandomNum() {
      setNum("Hi " + Math.random());
  }
  return (
    // Header ch we want it to rerender only when props are changed;
    <div>
      <button onClick={RandomNum}>Random num</button>
      <Header title={num} /> 
      <Header title={"helloWorld2"} />
      <Header title={"helloWorld3"} />
      <Header title={"helloWorld4"} />
      <Header title={"helloWorld5"} />
      <Header title={"helloWorld6"} />
    </div>
  );
}

export default App02StopRerendering;
