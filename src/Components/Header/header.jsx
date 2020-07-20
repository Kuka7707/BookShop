import React from 'react'
import H from './header.module.css'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
   return (
      <header className={H.header}>
         <NavLink className={H.link} to="/shop">
            <h1 className={H.header_title}>BookShop</h1>
         </NavLink>
         <div className={H.desc}>
            <div className={H.total}>
               Итого: {props.totalPrice} ₸
            </div>
            <NavLink className={H.cart} to="/cart">
               Корзина ({props.count})
            </NavLink>
         </div>
      </header>
   )
}

export default Header
