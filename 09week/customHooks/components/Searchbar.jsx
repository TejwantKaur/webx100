import { useState, useEffect } from "react";

function useDebounce(input, delay) {
  const [debounce, setDebounce] = useState(input);
  // return input; 
    useEffect(() => {
        const val = setTimeout(()=>{
            setDebounce(input);
        }, delay);

        return () => {
          clearTimeout(val)
        }
    },[input]);

    return debounce;
}

function Searchbar() {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 1000);

  // useEffect(()=>{
  //   axios
  // }, [debouncedValue]) 
  // any time debounced val changes; then fetch from backend;


    return (
    <div>
      Debounced val: {debouncedValue} 
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type here"
      />
    </div>
  );
}

export default Searchbar;
