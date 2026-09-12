// linkedin top notification dynamic bar, +4 msges;
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalCountSelector } from "./atom";
import { useMemo } from "react";

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const ntwCount = useRecoilValue(networkAtom);
  const finalVal = ntwCount >= 100 ? "99+": ntwCount
  const jobCount = useRecoilValue(jobAtom)
  const msgeCount = useRecoilValue(messagingAtom)
  const [notificationCount, setNotificationCount] = useRecoilState(notificationAtom)
  
  // const totalVal = useMemo(()=>{
  //   return ntwCount+ jobCount + msgeCount + notificationCount;
  // } ,[ntwCount, jobCount, msgeCount, notificationCount]) 
  // jdo v koi var change; only odo cal kero totalVal;
  const totalCount = useRecoilValue(totalCountSelector);

  return ( 
    <div>
      <button>Home</button>
      <button>My Network ({finalVal})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({msgeCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me ({totalCount}) </button>

      <button onClick={()=>{
        setNotificationCount((c)=> c+1)
      }}>notification+</button>
    </div>
   );
}

export default App;