import { useDispatch, useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import ItemList from "./ItemLIst";
import { clearCart } from "../utils/cartSlice";

// const Cart =()=> {
//     const  onlineStatus = useOnlineStatus();
//     if(onlineStatus === false) return <h2>Looks Like U r Offline!! plz check ur Internet</h2>
//     return (
        
//         <div>
//             <h2>Add To Cart</h2>
//         </div>
//     )
// }
// export default Cart


const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items);
    // console.log(cartItems)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center">
        <h2 className="text-center m-[1px]">Cart</h2>

        <div className="w-[1000px] m-auto">
            <button className="m-auto p-[2px]" onClick={handleClearCart}>
                Clear Cart</button>

                {cartItems.length === 0 && <h4>Your cart is Empty...Please Add Some Items</h4>}

            <ItemList items={cartItems}/>
        </div>

    </div>;
};

export default Cart;