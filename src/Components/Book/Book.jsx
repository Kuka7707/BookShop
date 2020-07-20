import React from 'react'
import B from './Book.module.css'

const Book = (book) => {
   const { id, img, title, age_rest, author, price, addCart, addedCount } = book;
   return (
      <div className={B.book} key={id}>
         <div>
            <div className={B.block_img}>
               <img className={B.img} src={img} alt={title} />
               <div className={B.age}>
                  {age_rest}
               </div>
            </div>
            <div className={B.desc}>
               <div className={B.title}>
                  {title}
               </div>
               <div className={B.author}>
                  Автор: {author}
               </div>
            </div>
            <div className={B.price}>
               {price} ₸
               </div>
         </div>
         <button className={B.btn} onClick={addCart.bind(this, book)}>Добавить {addedCount > 0 && `(${addedCount})`} </button>

      </div>
   )
}

export default Book
