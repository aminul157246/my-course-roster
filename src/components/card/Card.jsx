

const Card = ({card,handleAddToCart }) => {
    const {title,image,description,credit,price}= card;
    return (

<div className="card bg-base-100 shadow-xl p-12">
        <figure><img className='mb-2' src={image} alt="" /></figure>
    <div className="card-body">
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p>{description}</p >
    
        <div className='flex justify-between gap-2  mt-3'>
            <p className='font-bold'>Price :${price}</p>
            <p className='font-bold'>Credit : {credit} hrs</p>
        </div>
        <div className="flex justify-center">
            <button  onClick={()=> handleAddToCart(card)} className="btn bg-blue-800 py-2 px-4 rounded-xl mt-3">Select</button>
        </div>  
    </div>
</div>
        
    );
};

export default Card;
