import { useSetRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App4Recoil() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCount/>
    </div>
  );
}

function EvenCount() {
  const isEven = useRecoilValue(evenSelector)

  return <div>{isEven? "Its even": null} </div>
}

function Buttons() {
  //   const [count, setCount] = useRecoilState(countAtom)
  console.log("Button re-rendered")
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

export default App4Recoil;
