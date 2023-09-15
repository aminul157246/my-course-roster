
import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import Swal from 'sweetalert2'
import Carts from './components/Carts/Carts'
// import 'sweetalert2/src/sweetalert2.scss'
// import '@sweetalert2/themes/dark/dark.scss'
function App() {

  const [selectedCarts, setSelectedCarts]
  = useState([])   
  const [totalRemaining, setTotalRemaining] = useState(0)
  const [total, setTotal] = useState(0)

const handleAddToCart = cart => {
  const isExist = selectedCarts.find(item => item.id === cart.id)
  let total = cart.price;
  let count = cart.credit
  if(isExist){
    Swal.fire(
      'ERROR!',
      'You can not add multiple time!',
      'error'
    )
  }
  else{

selectedCarts.forEach(item => {
  count = count + item.credit
  total = total + item.price
});
setTotal(total);

const totalRemaining = 20 - count

if(count> 20){
  Swal.fire(
    'ERROR!',
    'You can not get negative value!',
    'warning'
  )
}
else {
  
  setTotalRemaining(totalRemaining);
  const newSelection = [...selectedCarts,cart]
  setSelectedCarts(newSelection)
}
}  
  }
  return (
    <>
      <h1 className='text-4xl text-center mt-6 font-bold'>Course Registration</h1>
      <div className='flex justify-between mx-12 gap-12'>
        <Cards handleAddToCart = {handleAddToCart}></Cards>
        <Carts selectedCarts = {selectedCarts}
        totalRemaining = {totalRemaining}
        total = {total}
        ></Carts>
      </div>
    
    </>
  )

}
export default App







/* 




import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

const [bookmarks , setBookmarks] = useState([])
const [readingTime, setReadingTime] = useState([])


const handleAddToBookmark = blog => {
  console.log('adding soon.......', blog)
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}

const handleReadingTime = (time, id) => {
  console.log('reading.....', time)
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)

  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
setBookmarks(remainingBookmarks)

}



  return (
    <>
      
      <Header></Header>
      <main className='flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark = {handleAddToBookmark} handleReadingTime = {handleReadingTime}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime ={readingTime}></Bookmarks>
      </main>
      
    </>
  )
}

export default App









*/