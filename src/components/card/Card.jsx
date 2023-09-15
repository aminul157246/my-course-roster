
import './Card.css'

const Card = ({card,handleAddToCart }) => {
    const {title,image,description,credit,price}= card;
    return (

<div className="card bg-base-100 shadow-xl p-10">
        <figure><img className='mb-2' src={image} alt="" /></figure>
    <div className="card-body">
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p>{description}</p >
    
        <div className='flex justify-between gap-4  mt-3'>
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














/* import { Prototype } from 'postcss/lib/css-syntax-error';
import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleReadingTime}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
            <img className='w-full mb-6 mt-16' src= {cover} alt = {`cover picture ' ${title}`} />

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-[50px]' src={author_img }alt="" />

                    <div><p className='text-2xl'>{author}</p> <p>{posted_date}</p></div>
                    
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <p>{reading_time} min read</p>
                    <button onClick= {()=> handleAddToBookmark(blog)} className='text-4xl text-red-400 '><FaBookmark>
                    </FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl mt-6'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) =>  <span key = {idx}># <a>{hash}</a></span> )
                }
                
            </p>
            <button className='bg-pink-300 p-4 rounded-xl mt-3' onClick={ () => handleReadingTime(id,reading_time) }>Mark as read</button>
        </div>
    );
};

Blog.prototype = {
    blog : PropTypes.object.isRequired
}
export default Blog;
 */