import { useState } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/Subheading";

import axios from 'axios'

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-120 text-center p-2 h-max px-4">
          
          <Heading label={"Signup"} />
          <SubHeading label={"Create Account"} />

          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            label={"FirstName"}
            placeholder="Tejwant"
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            label={"LastName"}
            placeholder="Kaur"
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label={"Username"}
            placeholder="kaur@gmail.com"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            placeholder="ZE34Tybh&9K"
          />

          <div className="pt-4">
            {" "}
            <Button onClick={async() => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                { username, password, firstName, lastName } // body
              );
              localStorage.setItem("token", response.data.token)
              // localStorage.removeItem("token")
            }}
            label={"Signup"} />{" "}
          </div>
          <Bottom
            label={"Already have an account?"}
            goto={"Signin"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
