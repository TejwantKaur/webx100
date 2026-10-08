"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // navigation vla; to navigate; after clicking btn;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign up to get started
          </p>
        </div>

        <div className="space-y-5">
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            placeholder="name"
          />

          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="124DAT$3"
          />

          <button
          onClick={async ()=> {
            await axios.post("http://localhost:3000/api/user",{
                username, password
            })
            router.push("/")
          }}
            type="button"
            className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

type InputBoxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  type?: string;
};

function InputBox({
  onChange,
  label,
  placeholder,
  type = "text",
}: InputBoxProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}