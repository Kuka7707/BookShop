import Shop from './Shop'
import {connect} from 'react-redux'
import {addCartAC, removeCartAC} from '../../Redux/CartReducer'

let mapStateToProps = (state) => {
   return{
      books: state.booksPage.books,
   }
}
let mapDispatchToProps = (dispatch) => {
   return{
      addCart: (obj) =>{
         dispatch(addCartAC(obj))
      },
      removeCart: (id) => {
         dispatch(removeCartAC(id))
      }
   }
}

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer