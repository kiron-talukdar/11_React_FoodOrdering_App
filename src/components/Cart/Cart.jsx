import PropTypes from "prop-types"
const Cart = ({foodOrder, }) => {

    const {recipe_name,preparing_time,calories}=foodOrder;

    return (
        <div className=' '>
            <div className="p-6 border-2 border-black-500 rounded-2xl">
                <h3 className="text-2xl text-center mb-4">Want to cook:</h3>
                <hr />
                <table className="table-auto mt-6">
                    <thead>
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Calories</th>
                            <th>Cook Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3">{recipe_name}</td>
                            <td className="p-3">{preparing_time}</td>
                            <td className="p-3">{calories}</td>
                            <button onClick={''} className="text-sm ">Preparing</button>
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
    );
};

Cart.propTypes={
    foodOrder:PropTypes.object,
    handleOrderFood:PropTypes.func
}
export default Cart;