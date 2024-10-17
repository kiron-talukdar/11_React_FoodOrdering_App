
const Cart = () => {
    return (
        <div className='md:w-1/3 '>

            <div className="p-6 border-2 border-black-500 rounded-2xl">
                <h3 className="text-2xl text-center mb-4">Want to cook:</h3>
                <hr />
                <table className="table-auto mt-6">
                    <thead>
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3">The fish spicy</td>
                            <td className="p-3">20</td>
                            <td className="p-3">1961</td>
                            <button className="text-sm ">Preparing</button>
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
                            <td className="p-3">the</td>
                            <td className="p-3">20</td>
                            <td className="p-3">1961</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;