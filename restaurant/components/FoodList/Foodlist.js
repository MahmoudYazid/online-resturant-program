import React, { useRef, useState, useEffect } from 'react'
import '../../../Api'
import { ApiData } from '../../../Api'

export default function Foodlist() {
  const FoodListController = useRef();
  const [FoodListvisibilityState, SetvisibilityState] = useState('invisible')
  const [DataOnProduct, SetDataOnProduct] = useState('')
  const [MealData, setMealData] = useState([])

  // Fetch data from TheMealDB API
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => {
        setMealData(data.categories)
      })
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <>
 
    <div id='FoodList' className={` FoodlistClass w-full bg-white flex flex-row flex-1 overflow-x-scroll scroll-smooth	 mt-20`}>
        <div  className=' drop-shadow-lg  bg-gay-100 m-5  min-w-[300px] min-h-[300px]    flex flex-col  justify-center text-center text-black item-center   '>
         
          <p className='font-black italic text-1xl FontFamilyText'>
            Our menu
          </p>

        </div>
      {
        MealData.map((data)=>(
          <div 
            key={data.idCategory}
            onClick={()=>{
              SetDataOnProduct(data.strCategoryDescription)
              SetvisibilityState('visible')
            }} 
            className='hover:scale-110 hover:cursor-pointer drop-shadow-lg bg-gay-100 m-5 min-w-[300px] min-h-[300px] flex flex-col justify-center text-center text-black item-center'>
            
            {/* Only show image if URL exists and is valid */}
            {data.strCategoryThumb && (
              <img 
                src={data.strCategoryThumb} 
                className='FoodListImg w-full flex-1'
                alt={data.strCategory}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            )}
            
            <p className='font-black italic text-1xl'>
              {data.strCategory}
            </p>
          </div>
        ))
      }
    

    
      
    </div>
      <div className={`z-10 min-h-screen	 w-80 bg-white		 flex flex-col  fixed	 visible ${FoodListvisibilityState}   `} id='FoodListSideNavbar' ref={FoodListController} >
        <img src='/kitchen.svg' className='imgConfig'></img>
        
        <div className=' justify-items-center  justify-center content-center item-center  flex flex-col flex-1 bg-white text-center  '>
          <div className='inline m-1 mt-5 hover:underline hover:cursor-pointer'>{DataOnProduct}</div>
         
        </div>

        <img src='/x-symbol-svgrepo-com.svg' className='XSympol text-center self-center mb-5 hover:animate-bounce hover:cursor-pointer	' onClick={() => SetvisibilityState('invisible')}></img>


    </div>
    </>
  )
}