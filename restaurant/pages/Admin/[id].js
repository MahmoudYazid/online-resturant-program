import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default  function Admin() {

    const router = useRouter()
    const { id } = router.query;
    const [OrdersData, SetOrdersData]=useState([])
    const [ChangeStatusText, SetChangeStatusText] = useState('')
    const DelOrder = async(_id)=>{
        await fetch(`/api/DelOrder?id=${_id}`).then((response_) => {
            response_.json().then((data) => {

                AdminCheck();

            })
        })
    }

    const ModStatus = async (_id) => {
        await fetch(`/api/ModStatus?id=${_id}&&newstate=${ChangeStatusText}`).then((response_) => {
            response_.json().then((data) => {

                AdminCheck();

            })
        })
    }


    const AdminCheck = async () => {
        await fetch(`/api/CheckExistanceOfId?id=${id}`).then((response) => {
            response.json().then((data) => {
             
                if (data['resp'].length >= 1) {
                    fetch(`/api/GetAllTheOrders`).then((response_) => {
                        response_.json().then((data) => {
                            

                            SetOrdersData(data.resp)
                            console.log(OrdersData)

                        })
                    })

                } else{
                 

                    router.push('/')
                }


            })
        })
    }

    // const GetAllOrdersCard =(key_)=>(
    
    // )

    useEffect(() => {
        AdminCheck()
  

    },[])
  return (
      <div className="flex justify-start items-center h-screen overflow-x-scroll scroll-smooth bg-white ">

        
          <div onClick={()=>{

              router.push('/')
          }} className="min-w-[400px] min-h-[13rem] m-3 bg-[#FFFF99] flex flex-col justify-center items-center text-center">
              <p className='font-bold FontFamilyTextForNav text-7xl	hover:hover:cursor-pointer hover:underline'>sign out</p>
                </div>
          {
            OrdersData.map(FetchState=>(
                <div key={FetchState._id} className="min-w-[400px] min-h-[13rem] m-3 bg-[#FFFF99] flex flex-col justify-start items-center ">
                    <div className='FontFamilyTextForNav font-bold'>name: {FetchState.name} </div>
                        <hr width="70%"
                            size="20"
                            align="center" />
                    <div className='FontFamilyTextForNav font-bold'>address: {FetchState.address}</div>
                        <hr width="70%"
                            size="20"
                            align="center"
                        />
                    <div className='FontFamilyTextForNav font-bold'>phone: {FetchState.tel}</div>
                        <hr width="70%"
                            size="20"
                            align="center" />
                    <div className='FontFamilyTextForNav font-bold'>order : {FetchState.order}</div>
                        <hr width="70%"
                            size="20"
                            align="center" />
                    <div className='FontFamilyTextForNav font-bold'>note : {FetchState.note}</div>
                        <hr width="70%"
                            size="20"
                            align="center" />
                    <div className='FontFamilyTextForNav font-bold '>Status:{FetchState.status}</div>
                        <hr width="70%"
                            size="20"
                            align="center" />
                        <input onChange={(e)=> SetChangeStatusText(e.target.value)} type='text' className='bg-slate-200 m-1  w-[15rem] h-[30px]   rounded-lg InputText animate-pulse' placeholder='New Status'></input>

                    <div onClick={() => ModStatus(FetchState._id)}  className=' min-w-1/6 pr-2 pl-2 m-1 font-bold FontFamilyTextForNav text-1xl	hover:hover:cursor-pointer hover:underline'>Change Status</div>

                        <div onClick={()=>DelOrder(FetchState._id)} className=' min-w-1/6 pr-2 pl-2 m-1 font-bold FontFamilyTextForNav text-1xl	hover:hover:cursor-pointer hover:underline'>End Order</div>
                    </div>


            ))
          }
        


      
    
       
         
      </div>
  )
}
