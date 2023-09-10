import React, { useRef,useState } from 'react'
import '../../../Api'
import { ApiData } from '../../../Api'

export default function Foodlist() {
  const FoodListController = useRef();
  const [FoodListvisibilityState, SetvisibilityState] = useState('invisible')
  const [DataOnProduct, SetDataOnProduct] = useState('')

  return (
    <>
 
    <div id='FoodList' className={` FoodlistClass w-full bg-white flex flex-row flex-1 overflow-x-scroll scroll-smooth	 mt-20`}>
        <div  className=' drop-shadow-lg  bg-gay-100 m-5  min-w-[300px] min-h-[300px]    flex flex-col  justify-center text-center text-black item-center   '>
         
          <p className='font-black italic text-1xl FontFamilyText'>
            Our menu
          </p>

        </div>
      {
ApiData.map((data)=>(
  <div onClick={()=>{
    SetDataOnProduct(`${data['description']}`)
    SetvisibilityState('visible')
   

  }} className=' hover:scale-110 hover:cursor-pointer drop-shadow-lg  bg-gay-100 m-5  min-w-[300px] min-h-[300px]    flex flex-col  justify-center text-center text-black item-center   '>
    <img src={`${data['img']}`} className='FoodListImg w-full flex-1 '></img>
    <p className='font-black italic text-1xl'>
      {data['name']}
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
