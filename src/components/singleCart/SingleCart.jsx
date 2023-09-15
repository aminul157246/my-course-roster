 
const SingleCart = ({singleCart }) => {
    const {title} = singleCart
    return (
            <div>
                
                {
                    <h2 className="text-2xl font-bold text-center">{title}</h2> 
                }
            </div>
    );
};

export default SingleCart;