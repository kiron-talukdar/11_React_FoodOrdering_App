import PropTypes from "prop-types"
const Cart = ({foodOrder, }) => {

    const {recipe_name,preparing_time,calories}=foodOrder;

    return (
 
       <>
            <tr>
                <td className="p-3">{recipe_name}</td>
                <td className="p-3">{preparing_time}</td>
                <td className="p-3">{calories}</td>
                <button onClick={''} className="text-sm ">Preparing</button>
            </tr>
    
            {/* <tr className=" ">
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
            </tr> */}
       </>
                     
    );
};

Cart.propTypes={
    foodOrder:PropTypes.object,
    handleOrderFood:PropTypes.func
}
export default Cart;