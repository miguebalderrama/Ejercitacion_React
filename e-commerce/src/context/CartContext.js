import { createContext,useState } from "react";

export const CartContext = createContext(false);

export const CartProvider = ({defaultValue=[],children})=>{
    const [items,setItems] = useState([defaultValue]);

    const addItem=(item,quantity)=>{}
    const removeItem=(itemId)=>{}
    const clear=()=> setItems([defaultValue]);
    const isInCart=(itemId)=>{
        //Is true if the item is in the cart
        //Is false if the item is not in the cart
    }
    return(
        <CartContext.Provider value={{items,addItem,removeItem,clear,isInCart}}>
           {children}
        </CartContext.Provider>
    )
}
