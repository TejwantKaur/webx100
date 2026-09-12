import { atom, selector } from "recoil";
import axios from 'axios'

// export const notificationsAtom2 = atom({
//     key: "notificationsAtom2",
//     // default: { network:4, jobs: 6, msges: 15, notification: 14 } hardcoded;
//     default: { network: 0, jobs: 0, msges: 0, notification: 0} 
//     // default: {}
// })

// making it async
export const notificationsAtom2 = atom({
    key: "notificationsAtom2",
    default: selector({
        key: "notificationsSelector",
        get: async() => {
            await new Promise((resolve)=> setTimeout(resolve, 5000))
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data
        }
    })
})

export const totalCountSelector2 = selector({
    key: "totalCountSelector2",
    get: ({get}) => {
        const allNotifications = get(notificationsAtom2)
        const nw = allNotifications.network
        const j = allNotifications.jobs
        const m = allNotifications.msges
        const n = allNotifications.notification
        
        return nw+j+m+n
    }
})