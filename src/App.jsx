
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import FoodCard from './components/FoodCard/FoodCard'
import Header from './components/Header/Header'
import RecipesTitle from './components/RecipesTitle/RecipesTitle'


function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipesTitle></RecipesTitle>
     
      <main className=' md:flex gap-5'>
          <FoodCard></FoodCard>
          <Cart></Cart>
      </main>

    </>
  )
}

export default App
