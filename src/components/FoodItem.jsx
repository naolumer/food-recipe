import { useNavigate } from 'react-router-dom'

const FoodItem = ({item}) => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col rounded-md border-gray-50 p-2 gap-3 items-center mt-8 mx-4 mb-8'>
        <img className='w-[300px] md:w-[400px] h-auto overflow-hidden rounded-md hover:scale-105 duration-300 ease-in-out' src={item.image} alt="" />
        <p className='text-center font-medium text-[20px]'>{item.title}</p>
        <button onClick={()=>navigate(`/recipe/${item.id}`)} className='mb-2 px-4 py-2 rounded-md text-white font-semibold bg-cyan-500 max-w-[50%] mx-auto hover:bg-gradient-to-t from-cyan-400 to-blue-400' >View recipe</button>
    </div>
  )
}

export default FoodItem