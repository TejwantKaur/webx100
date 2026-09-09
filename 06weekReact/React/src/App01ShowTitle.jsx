import Header from "./components/Header";
import HeaderBtn from "./components/HeaderBtn";

function App01ShowTitle() {
  // now all components will not render
  return (
    // React fragment <></>
    // React returns
    // <HeaderBtn/> only this renders;
    <div>
      <HeaderBtn/> 
      <Header title={"helloWorld2"} />
      <Header title={"helloWorld3"} />
      <Header title={"helloWorld4"} />
      <Header title={"helloWorld5"} />
      <Header title={"helloWorld6"} />
    </div>
  );
}

export default App01ShowTitle;
