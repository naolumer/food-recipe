import React from 'react'
import Navbar from "./components/Navbar"
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import FoodRecipe from './pages/FoodRecipe'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe/:id' element={<FoodRecipe/>}/>
      </Routes>
      
    </div>
  )
}

export default App