import './App.css'
import RevenueCard from './components/RevenueCard'

function App() {
  return ( 
    <div className='grid grid-cols-3 m-4'>
      <RevenueCard title={"Amount Pending"} orderCnt={"3"} amount={"23,000"}/>
    </div>
   );
}

export default App;