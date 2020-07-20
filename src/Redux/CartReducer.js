const ADD_BOOK = 'ADD-BOOK';
const REMOVE_BOOK = 'REMOVE-BOOK'

let initialState = {
   items: [],
}

const CartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_BOOK:
         return {
            ...state,
            items: [...state.items, action.obj]
         };
      case REMOVE_BOOK:
         return {
            ...state,
            items: state.items.filter(o => o.id !== action.id)
         };
      default:
         return state
   }
}

export const addCartAC = (obj) => ({ type: ADD_BOOK, obj })

export const removeCartAC = (id) => ({ type: REMOVE_BOOK, id,})

export default CartReducer