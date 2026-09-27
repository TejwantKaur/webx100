import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

// when logged in; show all users on paytm
function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(""); // whenever user types in input box;

  //  filtering users
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get( // backend has filter method we defined;
        "http://localhost:3000/api/v1/user/bulk?filter=" + filter, // filter ethe use horea;
      );
      // console.log("BULK RESPONSE:", response.data);
      setUsers(response.data.user);
    }
    fetchUsers();
  }, [filter]); // anytime filter changes; jido v apn type krange; this will be called;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="font-bold mt-6 text-lg"> Users</div>
      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)} // populated state variable;
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        { users.map((user) => {
            console.log(user)
            return <User key={user.id} user={user} />

        })}

      </div>
    </div>
  );
}

function User({ user }) {
  // console.log("user: "+ user)
  const navigate = useNavigate(); // hook given by react router;
  
  // console.log("USER OBJECT:", user);
  // console.log("USER ID:", user.id);

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        {/* when we want to change page on click; use useNavigate */}
        <Button
          onClick={(e) => {  // transfer money page;
            navigate("/send?id=" + user.id + "&name=" + user.firstName) 
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}

export default Users;
