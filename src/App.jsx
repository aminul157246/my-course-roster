
import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import Swal from 'sweetalert2'
import Carts from './components/Carts/Carts'
function App() {

  const [selectedCarts, setSelectedCarts]
  = useState([])   
  const [totalRemaining, setTotalRemaining] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)
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
setTotalCredit(count)
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
        totalCredit = {totalCredit}
        totalRemaining = {totalRemaining}
        total = {total}
        ></Carts>
      </div>
    
    </>
  )

}
export default App;