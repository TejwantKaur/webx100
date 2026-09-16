import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/Subheading";

function Signin() {
  
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

          <Heading/>
          <SubHeading/>
          <InputBox/>
          <InputBox/>

          <div className="pt-4">
            <Button label={"Signin"} />
          </div>

          <Bottom label={"Don't have an account?"} goto={"Signup"} to={"/signup"}/>


        </div>
      </div>
    </div>
  );
}

export default Signin;
