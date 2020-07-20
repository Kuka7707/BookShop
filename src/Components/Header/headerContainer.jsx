import {connect} from 'react-redux'
import Header from './header.jsx';
import { addCartAC } from '../../Redux/CartReducer.js';





let mapStateToProps = ({cart}) => ({
      totalPrice: cart.items.reduce((total, book)=> total + book.price, 0 ),
      count: cart.items.length,
})
let mapDispatchToProps = (dispatch) => {
   return{
      addCart:(obj) => {
         dispatch(addCartAC(obj))
      },
      
   }
}

const headerContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default headerContainer