import React, { useState } from 'react'

const Search = () => {
    const [food,setFood] = useState("pizza")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setFood("")
    }

  return (
    <div className='p-5 bg-gray-50 shadow-md border-b-2 text-center mt-10 w-[500px] mx-auto'>
        <input onChange={(e)=>setFood(e.target.value)} value={food} className='p-2 px-8 outline-none border-none rounded-md text-md font-md' type="text" placeholder='Enter food...' />
        <button type='submit' onClick={handleSubmit} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-sm hover:bg-gradient-to-l from-blue-400 to-cyan-400 font-semibold'>Search</button>
    </div>
  )
}

export default Search