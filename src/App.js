import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import ShopContainer from './Pages/Shop/ShopContainer';
import CartContainer from './Pages/Cart/CartContainer';
import Header from './Components/Header/headerContainer';

function App() {
  
  return (
    <div className="wrap">
      <Header/>
      <div className="content">
        <Route path="/shop" render={()=>(<ShopContainer/>)} />
        <Route path="/cart" render={()=>(<CartContainer/>)} />

        <Redirect path="/" to="/shop"  />
      </div>
    </div>
  );
}

export default App;
