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





/* 


import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
import Cart from '../cart/Cart';

const Home = () => {
    


const [allActor, setAllActor] = useState([])
const [selectedActor, setSelectedActor] = useState([])
const [remaining, setRemaining] = useState(0)
const [totalCost, setTotalCost] = useState(0)

useEffect(()=>{
    fetch('card.json')
    .then(res => res.json())
    .then(data => setAllActor(data))
},[])
console.log(allActor)


// show in cart 
const handleName = (actor)=>{
   const isExist =  selectedActor.find(item => item.id === actor.id)

   let count = actor.salary;
   if(isExist){
    return alert('fuck')
   }
   else{

    selectedActor.forEach(item =>{
        count = count + item.salary
    })
    

    // remaining
    const totalRemaining = 20000-count
    
    if (count>20000){
        alert('teha shesh r hbe na ')
    }
    else{
        setTotalCost(count);
        setRemaining(totalRemaining)
        setSelectedActor([...selectedActor,actor])
    }
    
   }
        
    }
    

    return (
        <div>
            <div className="container">
                <div className="home-container">
                <div className="card-container">
                    {
                        allActor.map(actor => (

                    <div key = {actor.id} className="card">
                        <div className="card-img">
                            <img className='photo' src={actor.image} alt="" />
                        </div>
                        <h2>  {actor.name} </h2>
                        <p>Age :{actor.age} </p>
                        <div className="info">
                            <p>Salary :{actor.salary} </p>
                            <p> {actor.role}</p>
                        </div>
                        <button onClick={()=>handleName(actor)} className="btn">
                            select 
                        </button>

                    </div>
                        ))
                        
                    }
                    </div>

            
                    <div className="cart">
                        <Cart
                        remaining = {remaining}
                        totalCost = {totalCost}
                        selectedActor={selectedActor}></Cart>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;



































































import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h4 className="text-4xl ">blog: {blogs.length}</h4>
            {
                blogs.map(blog => <Blog key = {blog.id} blog = {blog}
                    handleAddToBookmark= {handleAddToBookmark}
                    
                    handleReadingTime =  {handleReadingTime}
                ></Blog> )
            }
            
        </div>
    );
};

export default Blogs;





















import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../../Bottle/Bottle";
import './Bottles.css'
import {addToLocalStorage,  getStoredCart , removeCartLS } from "../../Utility/cart";
import Cart from "../../cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]) 

    useEffect(()=> {
        fetch ('Bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    }, [])


    const [carts, setCarts] = useState([])
    const cartHandler = (bottle) => {
    console.log('clicked', bottle )
    const newCart = [...carts, bottle]
    
    setCarts(newCart ) 
    addToLocalStorage(bottle.id)
    }


    // remove 
const handleRemoveFromLS = id => {
     // remove from UI 
    const remainingCartUI = carts.filter(bottle => bottle.id !== id)
    setCarts(remainingCartUI)
      // remove from LS 
    removeCartLS(id)
}


  // load cart from local storage
    useEffect(()=> {
        if(bottles.length>0){
            const storedCartId = getStoredCart();
            console.log(storedCartId)
    
            const savedCart = []
        for(const id of storedCartId){
            console.log(id)
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                savedCart.push(bottle)
            }
        }
        console.log(savedCart)
        setCarts(savedCart)
    }
} ,[bottles])



    return (
        <div>
            <h3>Numbers of bottles : {bottles.length}</h3>
            <Cart handleRemoveFromLS={handleRemoveFromLS}  cart = {carts}></Cart>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle key = {bottle.id} cartHandler= {cartHandler} bottle = {bottle} ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles; 






*/