import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

// this depends on the already defined values;
export const totalCountSelector = selector({
    key: "totalCountSelector",
    get: ({get}) => {
        // get current values;
        const networkCount = get(networkAtom);
        const jobCount = get(jobAtom)
        const msgeCount = get(messagingAtom)
        const notificationCount = get(notificationAtom)

        return networkCount + jobCount + msgeCount + notificationCount;
    }
})