import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 p-5 shadow-md shadow-cyan-900 flex items-center justify-between'>
        <div className='flex items-center gap-3 ml-6'>
            <span className='text-2xl'>🍽️</span> 
            <h1 className='text-3xl font-bold text-white font-mono'>Food Recipe</h1> 
            <span className='text-2xl'>🍔</span>
        </div>
        
        <div className='items-center gap-3 mr-12 hidden md:flex'>
            <p className='text-lg font-mono text-gray-100 hover:bg-gray-400  hover:text-white cursor-pointer rounded-md p-2'>Home</p>
            <p className='text-lg font-mono text-gray-100 hover:bg-gray-400 hover:text-white cursor-pointer rounded-md p-2'>About</p>
            <p className='text-lg font-mono text-gray-100 hover:bg-gray-400 hover:text-white cursor-pointer rounded-md p-2'>Contact</p>
            <p className='text-lg font-mono text-gray-100 hover:bg-gray-400 hover:text-white cursor-pointer rounded-md p-2'>Recipes</p>
        </div>
    </div>
  )
}

export default Navbar