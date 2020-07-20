import React from 'react'
import B from './Shop.module.css'
import BookContainer from '../../Components/Book/BookContainer'



const Shop = (props) => {
   return (
      <div className={B.books}>
         {props.books.map((book, i) => <BookContainer key={i} {...book} />)}
      </div>
   )
}

export default Shop
