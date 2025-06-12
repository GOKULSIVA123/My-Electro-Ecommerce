import React, { createContext, useState } from 'react'
import  Header  from './sections/Header';
import {Routes,Route} from "react-router-dom"
import Cart1 from "./Pages/Cart1";
import Home from "./Pages/Home";
import Product from './sections/Product';
import Favourite from './Pages/Favourite';
import Login from "./Pages/Login"
export const cartcontent= createContext();
function App() {
  const [cartvalue, setCartValue] = useState([]);
  const [fav,setFav]=useState([]);
  const updateCartQuantity = (id, newQuantity) => {
    setCartValue(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
      
      
    );
  };
  return (
    <cartcontent.Provider value={{cartvalue,setCartValue,updateCartQuantity,fav,setFav}}>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home ></Home>}></Route>
      <Route path='/Cart1' element={<Cart1></Cart1>}></Route>
      <Route path='/Products' element={<Product></Product>}></Route>
      <Route path='/fav' element={<Favourite></Favourite>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
    </Routes>
    </cartcontent.Provider>
  )
}

export default App