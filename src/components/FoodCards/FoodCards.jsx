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
        <div>
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