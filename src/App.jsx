import React, { createContext, useState } from 'react'
import  Header  from './sections/Header';
import {Routes,Route} from "react-router-dom"
import Cart1 from "./Pages/Cart1";
import Home from "./Pages/Home";
import Product from './sections/Product';
import Favourite from './Pages/Favourite';
import Login from "./Pages/Login"
import { useLocation } from 'react-router-dom';
export const cartcontent= createContext();
function App() {
  const location=useLocation();
  const [cartvalue, setCartValue] = useState([]);
  const [fav,setFav]=useState([]);
  const [login1,setLogin1]=useState(true);
  console.log(login1);
  
  const updateCartQuantity = (id, newQuantity) => {
    setCartValue(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
      
      
    );
  };
  return (
    <cartcontent.Provider value={{cartvalue,setCartValue,updateCartQuantity,fav,setFav,login1,setLogin1}}>
    {login1?
    <Header></Header>:<></>
}
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