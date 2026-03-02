import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearItem());
    }
    const cartItems = useSelector((store)=>store.cart.items);
    return(
        <div className="text-center p-4 m-4">
            <h1 className="text-xl">Cart</h1>
            <button type="button" className="p-2 m-2 bg-gray-500 text-white rounded btn btn-info" onClick={()=>handleClearCart()}>Clear cart</button>
            <ItemList items={cartItems}/>
        </div>
    )
}

export default  Cart;