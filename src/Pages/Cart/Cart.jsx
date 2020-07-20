import React from 'react'
import C from './Cart.module.css'


const CartComp = ({ img, title, author, price, id, removeCart }) => (
   <div className={C.book}>
      <div className={C.block_img}>
         <img className={C.img} src={img} />
      </div>
      <div className={C.title}>
         <span>{title}</span>
         <br />
         Автор: {author}
      </div>
      <div className={C.price}>
         {price} ₸
      </div>
      <div >
         <button className={C.btn_red} onClick={removeCart.bind(this, id)}>Удалить</button>
      </div>
   </div>
);

const Cart = ({ items }) =>(
      <div className={C.books}>
         {items.map(book => (<CartComp {...book} />))}
      </div>
   )

export default Cart
