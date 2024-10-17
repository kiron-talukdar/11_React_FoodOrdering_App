import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {


    return (
        <div>
            <div className="flex justify-between items-center pt-12 pb-12 ">
                <div>
                    <h2 className="text-4xl font-bold">K_Restaurant</h2>
                </div>
                <div>
                    <ul className="flex gap-8 text-base">
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                </div>

                <div className="flex items-center gap-4"> 
                    <div className=" text-black rounded-1xl border-2 border-black-500 text-xl ">
                        <input className=""  type="text" placeholder="search"/>
                    </div>
                    <button><FaRegUserCircle /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;