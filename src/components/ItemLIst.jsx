import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    // console.log(items)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));

    }
    return <div>
            {items.map((item) => 
            (<div key={item?.card?.info?.id} className="p-[10px] m-[10px] border-b-1 text-left flex">
                {item?.card?.info?.imageId &&(
                <img src={CDN_URL + item?.card?.info?.imageId} className="w-[50px]"/>)}
            <div>
                <div className="py-[5px]"><span>{item?.card?.info?.name}</span>
                    <span> -- ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                </div>

                <div><p className="text-[10px]">{item?.card?.info?.description}</p></div>
                <div>
                    <button onClick={() => handleAddItem(item)}>
                        Add+
                    </button>
                </div>

            </div>   
 
            </div>))}
    </div>
    
};


export default ItemList;