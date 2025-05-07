import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items)
    return <div>
            {items.map((item) => 
            (<div key={item?.card?.info?.id} className="p-[10px] m-[10px] border-b-1 text-left flex">
                {item?.card?.info?.imageId &&(
                <img src={CDN_URL + item?.card?.info?.imageId} className="w-[50px]"/>)}
            <div>
                <div className="py-[5px]"><span>{item?.card?.info?.name}</span>
                    <span> -- ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                </div>

                <p className="text-[10px]">{item?.card?.info?.description}</p>

            </div>   
 
            </div>))}
    </div>
    
};


export default ItemList;