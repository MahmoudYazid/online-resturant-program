import React from 'react'

export default function Contact() {
  return (
      <div id='Contact' className={` w-full  flex lg:flex-col flex-1  flex-col mt-20  bg-white`}>
          <div className=' bg-white   w-full  flex-1 flex flex-row  justify-center text-center  '>
              <div className='w-50 bg-white w-1/3 	 text-black rounded-[5px]'>
                  <p className=' italic text-3xl mt-2 text-black FontFamilyText'>

                      Hello I am Eng. Mahmoud Abuelyazid  and this is My WebSite
                  </p>
              </div>

          </div>
          <div className={` w-[100%]   bg-white flex  flex-col content-center	items-center justify-items-center mt-1 rounded-tr-[10px] `}>

              <a className=' min-w-1/6 pr-2 pl-2 m-5 text-center bg-black text-white h-[2rem] rounded-[10px] hover:text-black hover:bg-green-400 hover:cursor-pointer' href='https://www.linkedin.com/in/mahmoudyazid/'>Contact With me</a>


          </div>
      </div>
  )
}
