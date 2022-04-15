import { OfflineShareRounded } from "@mui/icons-material";
import { Types } from "../actions/shoppingActions";

export const shoppinginitialState= {
    Products: [offer={oferta}, 
    url="ofertas"],
    Cart:[],
};
export function shoppingReducer(state,action) {
    switch (action.key) {
        case Types.ADD_TO_CART:{
            let newoffer = state.Products.find (
                (offer)=>offer.id===action.payload)
            let itemInCart = state.cart.find (
                offer=> offer.id === newoffer.id )
                return  itemInCart 
                    ? {
                        ...state, 
                        Cart: state.Cart.map(offer => offer.id ===newoffer.id 
                            ? {...offer, quantity: offer.quntity + 1 }
                            : offer
                        )     
                    }
                    :  { 
                        ...state,  
                        Cart: [...state.Cart, {...newoffer, quantity: 1}]
                } 
            
         }
         case Types.REMOVE_ONE_PRODUCT:{
             let itemToDelete = state.cart.find ( offer => offer.id === action.payload )
         
              return itemToDelete.quantity >  1
              ? {
                  ...state,
                  Cart: state.Cart.map ( offer => 
                    offer.id === action.payload
                    ? {...offer, quantity: offer.quantity - 1 }
                    : offer
                  ) 
              }
              : {...state,
                  Cart: state.Cart.filter (offer => offer.id !== action.payload )  
            }
            }
         case Types.REMOVE_ALL_PRODUCT: {
            return{
                ...state,
                Cart: state.Cart.filter (offer => offer.id !== action.payload )  
          }
         }
         case Types.CLEAR_CART:{
             return shoppinginitialState
         } 
         default:
             return state;
            
        }  
    };