import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
// import cardFoodImage from "../../assets//images/half-top-view-baked-potatoes-with-meatballs-vegetables-inside-plate-dark-blue-background.jpg";
const FoodCard = ({food,handleOrders}) => {
    
    const {recipe_image,recipe_name,recipe_desc,ingredients,preparing_time,calories} = food;


    return (
            <div className=" grid grid-cols-2 gap-5 ">

                <div className=" p-6 rounded-2xl	bg-base-100 shadow-xl border-2 border-black-500">
                    <img className="rounded-lg" src={recipe_image} alt="" />
                    <h2 className="mt-6 text-2xl">{recipe_name}</h2>
                    <p className="mt-4 mb-6">{recipe_desc}</p>
                    <hr />

                    <div className="mt-6 ">
                        <h2 className="mb-4">Ingradients: </h2>
                        {
                            ingredients.map((ingredient,idx)=> 
                            <ul className="text-sm mb-4" key={idx}>
                                <li className="">{ingredient}</li>
                            </ul>
                            )
                        }
                        
                    </div>
                    <hr />
                    
                    <div className="flex justify-between my-6">
                        <div className="flex justify-center items-center gap-1">
                            <IoMdTime />  
                            <span>{preparing_time}</span>
                        </div>

                        <div className=" flex justify-center items-center gap-1">
                            <FaFire />
                            <span>{calories}</span>
                        </div>
                    </div>
                    <button onClick={()=>handleOrders(food)}>Want to Cook</button>

                </div>

            </div>

    
    );
};

FoodCard.propTypes={
    food: PropTypes.object.isRequired,
    handleOrders:PropTypes.func
}
export default FoodCard;