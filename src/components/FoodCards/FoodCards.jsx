import { useEffect, useState } from "react";


const FoodCards = () => {

    const [foods, setFoods]=useState([])
    
    useEffect(()=>{
        fetch(`blogs.json`)
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default FoodCards;