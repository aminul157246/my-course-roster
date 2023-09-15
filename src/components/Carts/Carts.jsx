
import SingleCart from '../singleCart/SingleCart'
const Carts = ({selectedCarts, totalRemaining, totalCredit,total}) => {

    return (
        <div className=" w-1/3   card-container mt-20">
            <h1 className='text-xl font-bold'> No of Cart :  {selectedCarts.length}</h1>  
            <h3 className='text-2xl text-blue-600 mb-4 font-bold'>total remaining : {totalRemaining}hrs</h3>
            <div className='bg-gray-300 rounded-lg pl-4 '>
            
            { 
                
                selectedCarts.map((singleCart, idx) => <li >{idx+1} <SingleCart key={idx}
                totalCredit= {totalCredit}
                totalRemaining = {totalRemaining}
                total = {total}
                singleCart={singleCart}></SingleCart></li>)
            }
            </div>
            <h2 className='text-2xl font-bold mt-8'>Total Credit :  {totalCredit}hrs</h2>
            <h3 className='text-xl font-bold mt-8'>Total Price : {total}$</h3>
        </div>
    );
};

export default Carts;