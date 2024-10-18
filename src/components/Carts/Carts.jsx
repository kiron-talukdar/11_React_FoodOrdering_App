import Cart from '../Cart/Cart'
import PropTypes from "prop-types";

// const Carts = ({foodOrders , handleOrderFood}) => {

//     return (
//         <div className='md:w-1/3'>
            
//             {
//                 foodOrders.map((foodOrder,idx)=> <Cart key={idx} foodOrder={foodOrder} handleOrderFood={handleOrderFood}></Cart>)
//             }
//         </div>
//     );
// };
// Carts.propTypes={
//     foodOrders:PropTypes.array,
//     handleOrderFood:PropTypes.func
// }

// export default Carts;








const Carts = ({foodOrders , handleOrderFood}) => {

    return (
        <div className='md:w-1/3'>

            <div className=' '>
                <div className="p-6 border-2 border-black-500 rounded-2xl">
                    <h3 className="text-2xl text-center mb-4">Want to cook:</h3>
                    <hr />
                    <table className="table-auto box-border mt-6">
                        <thead>
                            <tr className='flex justify-between'>
                                <th className="p-3">Name</th>
                                <th className="p-3">Time</th>
                                <th className="p-3">Calories</th>
                                <th className='p-3'>Cook Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                  
                                {
                                    foodOrders.map((foodOrder,idx)=> <Cart key={idx} foodOrder={foodOrder} handleOrderFood={handleOrderFood}></Cart>)
                                }
                            </tr>

                        </tbody>
                    </table>

                    <h3 className="mt-8 mb-4 text-2xl text-center">Currently cooking:</h3> 
                    <hr />
                    <table className="table-auto mt-6">
                        <thead>
                            <tr className="">
                                <th className="p-3">Name</th>
                                <th className="p-3">Time</th>
                                <th className="p-3">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" ">
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};
Carts.propTypes={
    foodOrders:PropTypes.array,
    handleOrderFood:PropTypes.func
}

export default Carts;


