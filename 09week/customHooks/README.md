### custom hooks;
- hmesha use to shuru kerna useTodos; then return state variable; return todos;
- add loader; 

### data fetching hooks;
- we will send n; and useEffect should; rerun afer n secs; refresh;
- useInterval
- ek wari pehle load (axios.get); then fertoh in intervals; tahi refresh hoyi jaaye;
- now we want whenever n changes; useEffect() should re-render;
- jdo rerender hoyega; it will start useEffect again; so hun sade kol 2 interval chlre n=5 and n=10 vla; clear previous interval of ; b4 starting new interval;

- so we r using 
  - return function in useEffect; jera ke always pehla chlda; also called cleanup function

- useSWR from 'swr'; which helps us to create our hooks;