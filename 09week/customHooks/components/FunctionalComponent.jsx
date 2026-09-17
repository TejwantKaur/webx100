import { useEffect, useState } from 'react'

function FunctionalComponent() {
  const [render, setRender] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    }, 5000) // after 5 secs; 
  },[])

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setRender(r => !r)
  //   }, 3000) // after 5 secs; 
  // },[])

  return (
    <>
      {render ? <MyComponent/>: <div></div>}
    </>
  )
}

function MyComponent(){
  useEffect(()=>{
    console.log("Component mounted!") // main

    return () => {
      console.log("Component unmounted") // inside
    }
  }, [])
  // on the very first try; main will be logged; 
  // now whenever [todos]; whenever this change; sbtoh pehle function run krega; [Component inside] will log first everytime now before; main

  return <div> My component</div>
}

export default FunctionalComponent;

// Hook into life cycles for functional components
// sbto pehle component mounted; myComponent shows;
// then when myComponent empty; unmounted shows;
// we can call again and again; 
