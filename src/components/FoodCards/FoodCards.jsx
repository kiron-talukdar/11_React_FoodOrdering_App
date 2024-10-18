import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard";


const FoodCards = ({handleOrders}) => {

    const [foods, setFoods]=useState([])


    
    useEffect(()=>{
        fetch('foods.json')
        .then(res=> res.json())
        .then(data=> setFoods(data))
    },[])

    return (
        <div className=' grid grid-cols-2 gap-5 md:w-2/3'>
            {
                foods.map((food,idx)=> <FoodCard key={idx} food={food} handleOrders={handleOrders}></FoodCard>)
            }
        </div>
    );
};

FoodCards.propTypes={

    handleOrders:PropTypes.func,
}
export default FoodCards;