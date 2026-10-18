"use client"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export default function(){
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    // <TextInput type="number"/>

    return (
      <div>
        <Card title="Send Money">
          <div className="w-full">
            <TextInput 
              label={"User Ph.No"} placeholder={"9084567"}
              onChange={(value) => {setNumber(value)}}
            />

            <TextInput 
              label={"Amount"} placeholder={"5000"} 
              onChange={(value) => {setAmount(value)}}
            />

            <div className="flex justify-center pt-4">
              <Button
                onClick={async() => {
                  await p2pTransfer(number, Number(amount) * 100)
                }}>
                Send
              </Button>
            </div>

          </div>
        </Card>
      </div>
    )
}

