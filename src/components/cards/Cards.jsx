import { useEffect, useState } from "react";
import Card from "../card/Card";
const Cards = ( {handleAddToCart}) => {

    const [cards, setCards] = useState([])
    
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    
    
    

    return (
        <>
            <div className="w-2/3 mx-auto mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cards.map(card => <Card key = {card.id} 
                    handleAddToCart = {handleAddToCart} card = {card}></Card> )
            }
            </div>

            
        </ >
    );
};

export default Cards; 




