import useOnlineStatus from "../utils/useOnlineStatus";

const Cart =()=> {
    const  onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h2>Looks Like U r Offline!! plz check ur Internet</h2>
    return (
        
        <div>
            <h2>Add To Cart</h2>
        </div>
    )
}
export default Cart