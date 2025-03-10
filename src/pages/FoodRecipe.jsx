import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FoodRecipe = () => {

  const [foodDetail,setFoodDetail] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams()
  const URL = `https://api.spoonacular.com/recipes/${id}/information`;
  const API_KEY = "9c60d1ff8b3742f1bda437647aab4b29";

  useEffect (()=>{
    async function fetchDetails(){
      const response = await fetch(`${URL}?apiKey=${API_KEY}`)
      const data = await response.json()
      setFoodDetail(data)
    }
    fetchDetails()
    setLoading(false)

  },[id])

  return (
    <div className='w-full mx-4 mt-8'>

      <h1 className='text-3xl font-bold text-center'>Here is your recipe, Enjoy 🥣</h1>
      {
        loading ? "Loading...":
        <div className='flex flex-col'>
          <img src={foodDetail.image} alt="" />
          <p>{foodDetail.title}</p>
          <div className='flex items-center justify-around'>
            <p>⌚ Cooking time : {foodDetail.readyInMinutes} </p>
            <p>👪 Can serve : {foodDetail.servings} People</p>
          </div>
          <div className='flex items-center justify-around'>
            <p>{foodDetail.vegetarian?"🥦 Vegetarian":"🍖 Non-vegetarian"}</p>
            <p>{foodDetail.vegan ?"🐮 Vegan":"🍊 Animal Free"}</p>
          </div>
        </div>
      }
      


    </div>
  )
}

export default FoodRecipe