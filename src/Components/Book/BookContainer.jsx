import { connect } from 'react-redux'
import Book from './Book';
import { addCartAC, removeCartAC} from '../../Redux/CartReducer.js';


const mapStateToProps = ({cart}, {id}) => ({
      addedCount: cart.items.reduce(
         (count, book) => count + (book.id === id ? 1 : 0), 
         0,
      ),
});

const mapDispatchToProps = (dispatch) => {
   return {
      addCart: (obj) => {
         dispatch(addCartAC(obj))
      },
      removeCart: (id) => {
         dispatch(removeCartAC(id))
      }
   }
}

const headerContainer = connect(mapStateToProps, mapDispatchToProps)(Book);


export default headerContainer