import { useState } from 'react'
import Search from '../components/Search'
import FoodList from '../components/FoodList'

const Home = () => {
    const [food,setFood] = useState("pizza")
  return (
    <div>
        <Search food={food} setFood={setFood}/>
        <FoodList food={food} setFood={setFood}/>
    </div>
  )
}

export default Home