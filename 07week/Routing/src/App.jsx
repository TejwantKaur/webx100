import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notificationsAtom2, totalCountSelector2 } from "./atoms2";
import { useEffect } from "react";


function App() {
  return ( 
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
   );
}

function MainApp(){
  const [notifications, setNotifications] = useRecoilState(notificationsAtom2)
  const totalCount = useRecoilValue(totalCountSelector2)

  // useEffect(()=>{
  //   // fetch
  //   axios.get("http://localhost:3000/notifications")
  //   .then((res) => { 
  //     setNotifications(res.data)
  //   })
  // }, [])

  return(
    <>
      <button>Home</button>
      <button>My Network ({notifications.network>=100? "99+": notifications.network}) </button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Messaging ({notifications.msges})</button>
      <button>Notifications ({notifications.notification>=100? "99+":notifications.notification})</button>
      <button>Me ({totalCount})</button>
    </>
  )
}


export default App;