import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Login() {
    const [InputName, SetInputName]=useState('')
    const [InputPassword, SetPassword]=useState('')
    const [GetAccountState, SetGetAccountState] = useState('')
    const router = useRouter()

    const CheckAuth = async () => {
        await fetch(`http://localhost:3000/api/CheckAuth?name=${InputName}&password=${InputPassword}`).then((response) => {
            response.json().then((data) => {

                if (data['resp'].length > 0) {
            
                    SetGetAccountState('-> You will Login Now')
                    router.push(`/Admin/${data['resp'][0]['_id']}`)
                    
                } else {
                    SetGetAccountState('-> Wrong Account')
                  
                }


            })
        })
    }
  return (
      <div id='LoginForm' className={` w-full  flex lg:flex-col flex-1  flex-col mt-20  bg-white`}>
          <div className=' bg-white   w-full  flex-1 flex flex-row  justify-center text-center  '>
              <div className='w-50 bg-white w-1/3 	 text-black rounded-[5px]'>
                  <p className=' italic text-3xl mt-2 text-black FontFamilyText'>

                      Login    {GetAccountState}
                  </p>
              </div>

          </div>
          <div className={` w-[100%]   bg-white flex  flex-col content-center	items-center justify-items-center mt-1 rounded-tr-[10px] `}>

              <input type='text' onChange={(e)=>SetInputName(e.target.value)} className='bg-slate-200  w-[20rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse ' placeholder='Name (Demo) : Admin'></input>
              <input type='text' onChange={(e) => SetPassword(e.target.value)}  className='bg-slate-200  w-[20rem] h-[30px]   mt-3 rounded-lg InputText animate-pulse ' placeholder='Password (Demo) : Admin'></input>
              <div  onClick={() => CheckAuth()} className=' min-w-1/6 pr-2 pl-2 m-5 text-center bg-black text-white h-[2rem] rounded-[10px] hover:text-black hover:bg-green-400 hover:cursor-pointer'>Login</div>

             

          </div>
         
      </div>
  )
}
