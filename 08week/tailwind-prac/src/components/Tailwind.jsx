import './App.css'

function Tailwind() {
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <div style={{backgroundColor: "red"}}>Red</div>
        <div style={{backgroundColor: "green"}}>Green</div>
        <div style={{backgroundColor: "yellow"}}>Yellow</div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-red-400'>Red</div>
        <div className='bg-green-400'>Green</div>
        <div className='bg-orange-500'>Yellow</div>
      </div>

      <div className="grid grid-cols-5">
       
        <div className='bg-green-400'>Green</div>
        <div className='bg-red-400'>Red</div>
        <div className='bg-yellow-500'>Yellow</div>
        <div className='bg-pink-400'>Pink</div>
        
        <div className='bg-green-400'>Green</div>
        <div className='bg-red-400'>Red</div>
        <div className='bg-yellow-500'>Yellow</div>
        <div className='bg-pink-400'>Pink</div>

        <div className='bg-green-400'>Green</div>
        <div className='bg-red-400'>Red</div>
        <div className='bg-yellow-500'>Yellow</div>
        <div className='bg-pink-400'>Pink</div>
        
        <div className='bg-green-400'>Green</div>
        <div className='bg-red-400'>Red</div>
        <div className='bg-yellow-500'>Yellow</div>
        <div className='bg-pink-400'>Pink</div>
      </div>

      <div className='grid mt-4 md:grid-cols-3 '>
        <div className='bg-green-400'>Green</div>
        <div className='bg-red-400'>Red</div>
        <div className='bg-yellow-500'>Yellow</div>
      </div>
    </>
    
  )
}

export default Tailwind;
