import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function SendMoney() {
  const [searchParams] = useSearchParams(); // get query from url
  // from url; navigate("/send?id=" + user._id + "&name=" + user.firstName)
  const id = searchParams.get("id"); // names in url;
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [msge, setMsge] = useState("")
  const navigate = useNavigate()

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-2 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 pt-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>

          <div className="p-5">
            <div className="flex items-center space-x-4 py-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {" "}
                  {name[0].toUpperCase()}{" "}
                </span>
              </div>
              <h3 className="text-2xl font-semibold"> {name} </h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-4 py-4">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>

                <input
                  onChange={(e) => setAmount(Number(e.target.value))}
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>

              <button
                onClick={ async () => {
                  try {
                    const response = await axios.post(
                      "http://localhost:3000/api/v1/account/transfer",
                      { toId: id, amount }, // body; 
                      // toId: id of person jihnu apn click kita money transfer kern lyi
                      {
                        headers: {
                          // signin hege aa apn;
                          Authorization: "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    );

                    console.log(response.data);
                    setMsge(response.data.msge);
                    // alert(response.data.msge); // my backend returns msge
                    
                    setTimeout(() => {
                      navigate("/dashboard");
                    }, 1500);

                  } catch(err){
                    console.log(err.message)
                  }
                }}

                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
              >
                Initiate Transfer
              </button>

              { msge && (
                <div className="fixed top-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md">
                  {msge}
                </div>
              ) }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
