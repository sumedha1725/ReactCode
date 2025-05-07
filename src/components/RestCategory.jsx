import { useState } from "react";
import ItemList from "./ItemLIst";

const RestCategory = ({data, showItems, setShowIndex }) => {


    // console.log(data)



    const handleClick = () => {
        setShowIndex();
    
        // setShowItems(!showItems);
    };

    return <div>
        
        {/* header */}

        <div className="w-1/2  mx-auto my-[10px] bg-gray-50 shadow-lg p-[4px] ">
            <div className="flex justify-between cursor-pointer m-[10px]" onClick={handleClick}>
                <span className="bold">{data.title}  ({data.itemCards.length})</span>

                <span> ▼ </span>

            </div>
        { showItems && <ItemList items = {data.itemCards} />}

        </div>


    </div>
}

export default RestCategory;