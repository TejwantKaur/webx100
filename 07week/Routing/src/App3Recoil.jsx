import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { CountAtom } from "./store/atoms/count";

function App3Recoil() {
  return ( 
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
   );
}
function Count(){
  return (
   <div>
    <div>hi</div>
    <CountRenderer/>
    <Buttons/>
   </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(CountAtom)

  return <div><b>{count}</b></div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={()=> setCount(count+1)}></button>
      <button onClick={()=> setCount(count-1)}></button>
    </div>
  )
}

export default App3Recoil;