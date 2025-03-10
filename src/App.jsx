import React from 'react'
import Navbar from "./components/Navbar"
import Search from './components/Search'
import FoodList from './components/FoodList'
import { useState } from 'react'

const App = () => {
    const [food,setFood] = useState("pizza")
  return (
    <div>
      <Navbar/>
      <Search food={food} setFood={setFood}/>
      <FoodList food={food} setFood={setFood}/>
    </div>
  )
}

export default App