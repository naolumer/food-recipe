import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodRecipe = () => {
  const [foodDetail, setFoodDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const URL = `https://api.spoonacular.com/recipes/${id}/information`;
  const API_KEY = "9c60d1ff8b3742f1bda437647aab4b29";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe details');
        }
        const data = await response.json();
        setFoodDetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, URL, API_KEY]);

  if (loading) {
    return <p className="text-center mt-12">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-12 text-red-500">Error: {error}</p>;
  }

  if (!foodDetail) {
    return <p className="text-center mt-12">No recipe data found.</p>;
  }

  return (
    <div className="w-full mx-4 mt-12">
      <h1 className="text-3xl font-bold text-center mb-10">Here is your recipe, Enjoy 🥣</h1>
      <div className="flex gap-4 items-center mt-0 w-full justify-start">
        <div className="flex-col md:flex-row gap-3 mb-16 mt-12 items-center">
          {/* Food Details Section */}
          <div className="flex flex-col gap-3 w-full  md:w-[45vw] ml-4  rounded-sm p-8 items-center border-b-2">
            <h2 className="font-bold text-center mb-2 text-3xl">Food Detail</h2>
            <img
              className="w-[400px] md:w-[480px] rounded-xl h-auto overflow-hidden mt-2"
              src={foodDetail.image}
              alt={foodDetail.title}
            />
            <p className="text-xl font-semibold text-start mb-2  ">{foodDetail.title}</p>
            <div className="flex flex-col gap-2 items-start justify-between ml-8">
              <p className="text-gray-600 font-medium">⌚ Cooking time: {foodDetail.readyInMinutes} minutes</p>
              <p className="text-gray-600 font-medium">👪 Can serve: {foodDetail.servings} people</p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-between">
              <p className="text-gray-600 font-medium">{foodDetail.vegetarian ? '🥦 Vegetarian' : '🍖 Non-vegetarian'}</p>
              <p className="text-gray-600 font-medium">{foodDetail.vegan ? '🐮 Vegan' : '🍊 Not vegan'}</p>
            </div>
          </div>
          {/* Instructions Section */}
          <div className="flex flex-col  ml-4 gap-3 w-full mx-32 md:w-[45vw] p-5 items-center border-b-2">
            <h2 className="text-3xl font-bold">Instructions</h2>
            {foodDetail.analyzedInstructions?.[0]?.steps ? (
              <ol className="list-decimal ml-6">
                {foodDetail.analyzedInstructions[0].steps.map((step) => (
                  <li className="text-gray-600 mt-2 text-md " key={step.number}>
                    {step.step}
                  </li>
                ))}
              </ol>
            ) : (
              <p>No instructions available.</p>
            )}
          </div>
        </div>
      </div>
      {/* Ingredients Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Ingredients</h2>
        <div className="rounded-sm p-10 flex flex-wrap w-full mx-8 gap-5 ">
          {foodDetail.extendedIngredients?.length > 0 ? (
            foodDetail.extendedIngredients.map((item) => (
              <div
                className="flex flex-col gap-5 items-center border-gray-300 rounded-md shadow-md p-6 m-2 hover:scale-105 duration-500 ease-in-out"
                key={item.id}
              >
                <img
                  className="h-auto w-[130px]"
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                  alt={item.name}
                />
                <p className="text-start font-semibold font-lg">{item.name}</p>
              </div>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodRecipe;