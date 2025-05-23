import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem';

const FoodList = ({food}) => {
    const [foodList,setFoodList] = useState([])
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "9c60d1ff8b3742f1bda437647aab4b29"

    useEffect(()=>{

        async function fetchFood(){
            const response = await fetch(`${URL}?query=${food}&apiKey=${API_KEY}`);
            const result = await response.json();
            setFoodList(result.results)
        }
        fetchFood()
    },[food])

  return (
    
    <div className='mx-auto flex flex-col md:flex-row gap-2 w-[90vw] mt-10   flex-wrap items-center  mb-16'>
        
        {foodList.map((item)=>(
                <FoodItem key={item.title} item={item}/>
        ))}
    </div>
  )
}

export default FoodList