import axios from 'axios';
// hitting the backend;
async function getUserData(){
  await new Promise((r) => setTimeout(r, 2000))
  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div>
        <div className="flex justify-center"> {userDetails.email} </div>
        <div className="flex justify-center"> {userDetails.name} </div>
      </div>
    </div>
  )
}
