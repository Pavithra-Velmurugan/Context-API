import logo from './logo.svg';
import './App.css';
import CartComponent from './components/CartComponent';
import Total from './components/Total';
import {useState } from 'react'

function App() {
    
  const[totalQuantity,setTotalQuantityContext] = useState(5)

  const [quantity,setQuantity]  = useState(1)

  const [totalPrice,setTotalPrice]  = useState(3476)

  return (
    <div className="App">
     <CartComponent totalPrice={totalPrice}setTotalPrice={setTotalPrice}  quantity={quantity} setQuantity = {setQuantity} totalQuantity={totalQuantity} setTotalQuantityContext={setTotalQuantityContext}/>
    </div>
  );
}

export default App;
