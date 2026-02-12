import React, { useState } from 'react'

export default function GetOrderState() {
    const [PhoneState, SetPhoneState]=useState('')
    const [GetOrderState, SetGetOrderState] = useState('')
    const [GetOrdertext, SetGetOrdertext] = useState('')
    
    const CheckStetus = async () => {
        await fetch(`/api/GetOrderStatus?tel=${PhoneState}`).then((response) => {
            response.json().then((data) => {
                
                if (data['resp'].length > 0){
                    SetGetOrderState(data['resp'][0]['status'])
                    SetGetOrdertext('Your Order  is :' + data['resp'][0]['order'])
                }else{
                    SetGetOrderState('You did not Request Order')
                    SetGetOrdertext('')
                }
                

            })
        })
    }
  return (
      <div id='OrderStatus' className={` w-full  flex lg:flex-col flex-1  flex-col mt-20  bg-black`}>
          <div className=' bg-black   w-full  flex-1 flex flex-row  justify-center text-center  '>
              <div className='w-50 bg-black w-1/3 	 text-black rounded-[5px]'>
                  <p className=' italic text-3xl mt-2 text-white FontFamilyText'>

                      Check Your Order Now

                  </p>
            </div>
              
        </div>
          <div className={` w-[100%]   bg-black flex  flex-col content-center	items-center justify-items-center mt-1 rounded-tr-[10px] `}>
            
              <input onChange={(e)=>{
                SetPhoneState(e.target.value)

              }}  type='text' className='bg-slate-200  w-[20rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse ' placeholder='Your Mobile'></input>
              <div onClick={() => CheckStetus()} className=' min-w-1/6 pr-2 pl-2 m-5 text-center bg-[#df6751] text-white h-[2rem] rounded-[10px] hover:text-black hover:bg-white hover:cursor-pointer'>check Now</div>
              <p className={` text-white  italic text-1xl `}>
                 Your Order State is :  {GetOrderState}
              </p>
              <p className={` text-white  italic text-1xl `}>
                   {GetOrdertext}
              </p>


          </div>
      </div>
  )
}
