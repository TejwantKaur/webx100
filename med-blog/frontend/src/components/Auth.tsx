import type { SignupSchema } from "@techaura/med-blog-common";
import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupSchema>({
    email: "", // required; we r searching with email bro;
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        postInputs,
      );
      console.log("response.data:", response.data);
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt); // set jwt;
      navigate("/blogs");
    } 
    catch (e) {
        alert("Inputs not correct")
    }
  }

  return (
    <div className="flex justify-center h-screen flex-col">
      <div className="flex justify-center max-w-full">
        <div>
          <div className="text-center px-12 ">
            {/* <div className="text-4xl font-bold">{type==="signup"? "Create an Account": "Login"}</div> */}
            <div className="text-4xl font-bold">Create an Account</div>
            <div className="text-slate-400 m-2">
              {type === "signup"
                ? "Already have an Account?"
                : "Dont have an Account?"}
              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Login" : "Signup"}
              </Link>
            </div>
          </div>

          <div className="mt-4">
              <InputBox
                label="Email"
                placeholder="abc@gmail.com"
                onChange={(e) => {
                  setPostInputs({ ...postInputs, email: e.target.value });
                }}
              />

            {type == "signup" ? (
            <InputBox
              label="Username"
              placeholder="usernsme"
              onChange={(e) => {
                setPostInputs({ ...postInputs, username: e.target.value });
              }}
            />
            ) : null}


            <InputBox
              label="Password"
              type="password"
              placeholder="AZy78dGEBY6U"
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
            />

            <div className="p-3">
              <button
                onClick={sendRequest}
                type="button"
                className="w-full text-white bg-dark box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                {type === "signup" ? "Sign up" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;

interface inputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function InputBox({ label, placeholder, onChange, type }: inputType) {
  return (
    <div>
      <div className="p-3">
        <label
          htmlFor={label}
          className="block mb-2.5 text-sm font-medium text-heading pl-2"
        >
          {label}
        </label>

        <input
          type={type || "text"}
          id={label}
          onChange={onChange}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
