import { useEffect, useState } from "react";
import useIsOnline from "../hooks/useIsOnline";


function OnlineHook() {
    const isOnline = useIsOnline();
    
    if(isOnline) return <div>You r Online!</div>
    return <div>You r Offline!</div>
     
}

export default OnlineHook;