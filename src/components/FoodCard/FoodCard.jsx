import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import cardFoodImage from "../../assets//images/half-top-view-baked-potatoes-with-meatballs-vegetables-inside-plate-dark-blue-background.jpg"
const FoodCard = () => {


    return (
        <div className=" grid grid-cols-2 gap-5  md:w-2/3">

           <div className="p-6 rounded-2xl	bg-base-100 shadow-xl border-2 border-black-500">
                <img className="rounded-lg" src={cardFoodImage} alt="" />
                <h2 className="mt-6 text-2xl">Recipe Name</h2>
                <p className="mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr />
                <div className="mt-6 ">
                    <h2 className="mb-4">Ingradients: </h2>
                    <ul className="text-sm mb-4">
                        <li className="">200g flour, 1 egg</li>
                        <li>100g butter</li>
                        <li>150g sugar, Vanilla extract</li>
                        <li>100g chocolate chips,Salt</li>
                    </ul>
                </div>
                <hr />
               
                <div className="flex justify-between my-6">
                    <div className="flex justify-center items-center gap-1">
                        <IoMdTime />  
                        <span>preparing_time</span>
                    </div>

                    <div className=" flex justify-center items-center gap-1">
                        <FaFire />
                        <span>calories</span>
                    </div>
                </div>
                <button>Want to Cook</button>

           </div>

        </div>
    );
};

export default FoodCard;