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
      console.log(data)
    }
    fetchDetails()
    setLoading(false)

  },[id])

  return (
    <div className='w-full mx-4 mt-12'>
      <h1 className='text-3xl font-bold text-center mb-10'>Here is your recipe, Enjoy 🥣</h1>

      <div className='flex gap-4 items-center mt-0 w-full justify-start'>
        <div className='flex gap-3 mb-16 mt-12'>
         
        <div className='flex flex-col gap-3 w-[45vw]  ml-4 shadow-lg rounded-md p-8'>
          <h2 className='font-bold text-center mb-2  text-3xl'>Food Detail</h2>
          <img className='w-[350px] md:w-[480px] rounded-xl h-auto overflow-hidden mt-2' src={foodDetail.image} alt="" />
          <p className='text-xl font-semibold text-start mb-2 ml-8'>{foodDetail.title}</p>
          <div className='flex flex-col gap-2 items-start justify-between ml-8'>
            <p className='text-gray-600 font-medium'>⌚ Cooking time : {foodDetail.readyInMinutes} </p>
            <p className='text-gray-600 font-medium'>👪 Can serve : {foodDetail.servings} People</p>
          </div>
          <div className='flex flex-col gap-2 items-start justify-between ml-8'>
            <p className='text-gray-600 font-medium'>{foodDetail.vegetarian?"🥦 Vegetarian":"🍖 Non-vegetarian"}</p>
            <p className='text-gray-600 font-medium'>{foodDetail.vegan ?"🐮 Vegan":"🍊 Animal Free"}</p>
          </div>
        </div>
        
        
        <div className='flex flex-col items-start ml-4 gap-3 w-[45vw] p-5 '>
          <h2 className='text-3xl font-bold'>Instructions</h2>
            {
                foodDetail.analyzedInstructions[0].steps.map((step)=>(
                     <li className='text-gray-600 mt-2' key={step.step}>{step.step}</li>
                ))
              } 
        </div>
        
        </div>
       
      </div>
      <div>
      <h2 className='text-3xl font-bold text-center mb-8'>Ingredients</h2>
       <div className=' rounded-sm p-10 flex flex-wrap  w-full mx-8 gap-8 '>
          {
            
            foodDetail.extendedIngredients.map((item)=>(
              <div className='flex flex-col gap-5 items-center border-gray-200 rounded-md shadow-sm p-4 m-2' key={item.name}>
                <img className='h-auto w-[130px]' src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
                <p className='text-start font-semibold font-lg'>{item.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      </div> 
  )
}

export default FoodRecipe