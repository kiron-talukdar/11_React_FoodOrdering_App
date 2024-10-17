
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Carts from './components/Carts/Carts'
import FoodCards from './components/FoodCards/FoodCards'
import Header from './components/Header/Header'
import RecipesTitle from './components/RecipesTitle/RecipesTitle'


function App() {

  const [foodOrders, setFoodOrders]=useState([])

  const handleOrders=( food)=>{
    // console.log('food order adding')
    // console.log(food);
    const newFoodOrders=[...foodOrders,food]
    setFoodOrders(newFoodOrders)
  }


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipesTitle></RecipesTitle>
      
     
      <main className=' md:flex gap-5'>

          <FoodCards handleOrders={handleOrders}  ></FoodCards>
          <Carts foodOrders={foodOrders}></Carts>
      </main>

    </>
  )
}



export default App
