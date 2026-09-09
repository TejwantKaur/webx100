function App04CardWrapper() {
  return (
    <>
      <CardWrapper> hi there 1 </CardWrapper>
      <CardWrapper> hi there 2 </CardWrapper>
      <CardWrapper> hi there 3 </CardWrapper>
    </>
  );
}

// can access all data btw
// <CardWrapper>...</CardWrapper>
function CardWrapper({ children }) {
  const style = { 
    border: "1px solid black", 
    borderRadius: "10px",
    margin: "0.5rem", 
    padding: "1rem" ,
  };
  
  return (
    <div style={style}> 
      {children} 
    </div>
  );
}
export default App04CardWrapper;
