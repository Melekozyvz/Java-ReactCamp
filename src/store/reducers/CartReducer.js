import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";
import { cartItems } from "../initialValues/CartItems";

const initialState={
    cartItems:cartItems
}
export default function cartReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_CART:
            let product=state.cartItems.find(p=>p.product.id==payload.id)
            if (product) {
                product.quantity++
                return {
                    ...state
                }
            } else {
                return{
                    ...state,
                    cartItems:[...state.cartItems,{quantity:1,product:payload}]
                }
            }
            break;
    
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.fill(c=>c.product.id!==payload.id)
            }
    
            break;
        default:
           return state;
    }
}