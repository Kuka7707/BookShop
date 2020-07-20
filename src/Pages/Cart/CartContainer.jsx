import { connect } from 'react-redux'
import { removeCartAC } from '../../Redux/CartReducer.js';
import Cart from './Cart';
import uniqBy from 'lodash/uniqBy';


const mapStateToProps = (state) => ({
      items:state.cart.items,
      items:uniqBy(state.cart.items, o => o.id),
});

const mapDispatchToProps = (dispatch) => {
   return {
      removeCart: (id) => {
         dispatch(removeCartAC(id))
      }
   }
}

const headerContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);


export default headerContainer