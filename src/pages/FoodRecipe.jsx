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

      <h1 className='text-3xl font-bold text-center mb-5'>Here is your recipe, Enjoy 🥣</h1>
      {
        loading ? "Loading...":
        <div className='flex flex-col gap-3 w-[80vw]'>
          <img className='w-[300px] md:w-[400px] rounded-md h-auto overflow-hidden' src={foodDetail.image} alt="" />
          <p className='text-lg font-semibold text-start mb-2'>{foodDetail.title}</p>
          <div className='flex items-center justify-around'>
            <p className='text-gray-600 font-medium'>⌚ Cooking time : {foodDetail.readyInMinutes} </p>
            <p className='text-gray-600 font-medium'>👪 Can serve : {foodDetail.servings} People</p>
          </div>
          <div className='flex items-center justify-around'>
            <p className='text-gray-600 font-medium'>{foodDetail.vegetarian?"🥦 Vegetarian":"🍖 Non-vegetarian"}</p>
            <p className='text-gray-600 font-medium'>{foodDetail.vegan ?"🐮 Vegan":"🍊 Animal Free"}</p>
          </div>
          <div className='w-full bg-gray-50 rounded-sm p-10'>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
        </div>

      }
      


    </div>
  )
}

export default FoodRecipe