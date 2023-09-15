
import SingleCart from '../singleCart/SingleCart'
const Carts = ({selectedCarts, totalRemaining, total}) => {

    return (
        <div className=" w-1/3 mx-auto card-container mt-20">
            <h1 className='text-xl font-bold'> No of Cart :  {selectedCarts.length}</h1>  
            <h3 className='text-2xl text-blue-600 mb-4 font-bold'>total remaining : {totalRemaining} hrs</h3>
            <div className='bg-gray-300 '>
            
            { 
                
                selectedCarts.map((singleCart, idx) => <SingleCart key={idx} 
                    totalRemaining = {totalRemaining}
                    total = {total}
                    singleCart={singleCart}></SingleCart>)
            }
            </div>
            <h3 className='text-xl font-bold mt-8'>Total = {total} $</h3>
        </div>
    );
};

export default Carts;