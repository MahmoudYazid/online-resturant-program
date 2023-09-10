import Image from 'next/image'


import Navbar from '../components/NavBar/Navbar'
import GetOrderState from '../components/Menu/GetOrderState'
import Foodlist from '../components/FoodList/Foodlist'
import OrderComponant from '../components/OrderComponant/OrderComponant'
import Login from '../components/Login/Login'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-white  `}>
      <Navbar></Navbar>
     
      <Foodlist></Foodlist>
      <OrderComponant></OrderComponant>
      <GetOrderState></GetOrderState>
      <Login></Login>
      <Contact></Contact>
    </main>
  )
}
