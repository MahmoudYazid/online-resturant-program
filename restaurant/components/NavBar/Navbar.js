import React, { useRef, useState } from 'react'

export default function Navbar() {
  const SideNavController=useRef();
  const [visibilityState, SetvisibilityState] = useState('invisible')
  const ShowNavBarFunction=()=>{
    if (visibilityState =='invisible'){
      
      SetvisibilityState('visible')
    }else{
      
      SetvisibilityState('invisible')
    }
    console.log(visibilityState)


  }

  return (
    <>
      <div className={` z-10 w-full  bg-slate-50	 flex flex-row  fixed`}>
      <img src='/kitchen.svg' className='imgConfig'></img>
        <div className=' flex flex-row flex-1 bg-slate-50 	  justify-items-center  justify-center content-center item-center invisible lg:visible'>
          <a className='inline m-1 mt-5   ml-2 mr-2 hover:scale-110 hover:cursor-pointer ' href='#FoodList'>Menu</a>
        <a href='#MakeOrder' className='inline m-1 mt-5 ml-2 mr-2  hover:scale-110 hover:cursor-pointer'>make order</a>
          <a href='#Contact' className='inline m-1 mt-5 ml-2 mr-2 hover:scale-110 hover:cursor-pointer'>contact</a>
          <a href='#LoginForm' className='inline m-1 mt-5  ml-2 mr-2 hover:scale-110 hover:cursor-pointer'>Login</a>
          <a href="#OrderStatus"className='inline m-1 mt-5 ml-2 mr-2  hover:scale-110 hover:cursor-pointer'>Order status</a>
        
      </div>
      <img src='/menu-Icon.svg' className='imgConfigLogo m-1 mt-4 lg:invisible visible hover:scale-110 hover:cursor-pointer' onClick={()=>ShowNavBarFunction()}></img>
          
     

    </div>
      <div className={`z-10 min-h-screen	w-80 bg-slate-50		 flex flex-col  fixed	 lg:invisible ${visibilityState}   `} id='SideNavbar' ref={SideNavController}>
        <img src='/kitchen.svg' className='imgConfig'></img>
        <div className=' justify-items-center  justify-center content-center item-center  flex flex-col flex-1 bg-white text-center  '>
          <a className='inline m-1 mt-5   ml-2 mr-2 hover:scale-110 hover:cursor-pointer ' href='#FoodList'>Menu</a>
          <a href='#MakeOrder' className='inline m-1 mt-5 ml-2 mr-2  hover:scale-110 hover:cursor-pointer'>make order</a>
          <a href='#Contact' className='inline m-1 mt-5 ml-2 mr-2 hover:scale-110 hover:cursor-pointer'>contact</a>
          <a href='#LoginForm' className='inline m-1 mt-5  ml-2 mr-2 hover:scale-110 hover:cursor-pointer'>Login</a>
          <a href="#OrderStatus" className='inline m-1 mt-5 ml-2 mr-2  hover:scale-110 hover:cursor-pointer'>Order status</a>

        </div>
       


      </div>
    </>
  )
}
