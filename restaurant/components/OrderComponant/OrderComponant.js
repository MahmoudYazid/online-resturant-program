import React, { useState } from 'react'


export default function OrderComponant() {
    const [progressValue, SetprogressValue ] = useState(10) 
    const [NameState, SetNameState ] = useState('') 
    const [EmailState, SetEmailState] = useState('') 
    const [PhoneState, SetPhoneState] = useState('') 
    const [AddressState, SetAddressState] = useState('') 
    const [NoteState, SetNoteState] = useState('') 
    const [OrderState, SetOrderState] = useState('') 
    const [OrderSendMsg, SetOrderSendMsg] = useState('invisible')
    const progressValueFunc=(e)=>{
        console.log(progressValue)
        

        if (e.target.value.length > 0) {
            SetprogressValue( progressValue+20)
        } else {
            SetprogressValue(progressValue - 20)
        }
        if (progressValue > 100) {
            SetprogressValue(0)
            console.log('done')
        }
    }

    const SendOrder=async ()=>{
        await fetch(`/api/PostOrder?name=${NameState}&address=${AddressState}&tel=${PhoneState}&order=${OrderState}&note=${NoteState}&email=${EmailState}`).then((response)=>{
            SetOrderSendMsg('visible')
        })
    }
  return (
      <div id="MakeOrder" className='w-100 flex flex-row align-center text-center  justify-center content-center'>
          <div className={` w-[80%]    flex  flex-col content-center	items-center justify-items-center mt-20 rounded-tr-[10px] `}>
          <p className='font-black text-black italic text-3xl '>
              Make Your Order Now
          </p>
             
              <input onChange={(e)=> {
                progressValueFunc(e)
                  SetNameState(e.target.value)
            }} type='text' className='bg-slate-200  w-[15rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse ' placeholder='Your Name'></input>
              <input onChange={(e) => {
                  progressValueFunc(e)
                  SetPhoneState(e.target.value)
              }} type='text' className='bg-slate-200  w-[15rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse' placeholder='Tel'></input>
              <input onChange={(e) => {
                  progressValueFunc(e)
                  SetEmailState(e.target.value)
              }} type='text' className='bg-slate-200  w-[15rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse' placeholder='Email'></input>
              <input onChange={(e) => {
                  progressValueFunc(e)
                  SetOrderState(e.target.value)
              }} type='text' className='bg-slate-200  w-[15rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse' placeholder='Your Order'></input>
              <input onChange={(e) => {
                  progressValueFunc(e)
                  SetNoteState(e.target.value)
              }} type='text' className='bg-slate-200  w-[15rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse' placeholder='Note'></input>
              <input onChange={(e) => {
                  progressValueFunc(e)
               SetAddressState(e.target.value)
              }} type='text' className='bg-slate-200  w-[15rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse' placeholder='Address'></input>

              <div onClick={()=>{
                SendOrder()
              }} className=' min-w-1/6 pr-2 pl-2 m-10 text-center bg-black text-white h-[2rem] rounded-[10px] hover:text-black hover:bg-white hover:cursor-pointer'>Order Now</div>
              <div className='flex flex-row '>
                  <progress id="file" value={`${progressValue}`} max="100" className=' m-1 progressBar '> 32% </progress>
                    
              </div>
              <p className={` font-black text-black italic text-1xl ${OrderSendMsg}`}>
                  Order Has been Send
              </p>
              
      </div>
</div >
)
}
