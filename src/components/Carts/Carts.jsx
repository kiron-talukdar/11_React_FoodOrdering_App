import Cart from '../Cart/Cart'
import PropTypes from "prop-types";

const Carts = ({foodOrders , handleOrderFood}) => {

    return (
        <div>
            {
                foodOrders.map((foodOrder,idx)=> <Cart key={idx} foodOrder={foodOrder} handleOrderFood={handleOrderFood}></Cart>)
            }
        </div>
    );
};
Carts.propTypes={
    foodOrders:PropTypes.array,
    handleOrderFood:PropTypes.func
}

export default Carts;