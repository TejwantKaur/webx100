import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users';

import axios from 'axios'

function Dashboard() {
    const [ balance, setBalance ] = useState(0);

    useEffect(()=>{
        async function getBalance(){
            // authorized hoyega tahi balance milega;
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/account/balance",
                    { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
                );
                setBalance(response.data.balance)
            } 
            catch(err){
                console.log(err.message)
            }
        }
        getBalance();
    }, [])

    return ( 
        <div>
            <AppBar/>
            <div className="m-8">
                <Balance value = { balance.toFixed(2) } />
                <Users/>
            </div>
        </div>
     );
}

export default Dashboard;