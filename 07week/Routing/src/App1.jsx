import { lazy } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import ('./components/Dashboard'))
const Landing = lazy(() => import ('./components/Landing'))

// client side routing
function App1() {
  return (
    <BrowserRouter>
    <AppBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

function AppBar(){
  const navigate = useNavigate() // hook
  return(
    <div>
        <button onClick={()=> {navigate('/')}}>Landing Page</button>
        <button onClick={()=> {navigate('/dashboard')}}>Dashboard</button>
    </div>
  )
}

export default App1
