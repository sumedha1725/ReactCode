import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const Menu = () => {
    const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.593674449063272&lng=73.78601700669863&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        console.log(json);
        setResMenu(json)
    };

    if(resMenu === null) return <Shimmer />;

    const {name, cuisines, sla} = resMenu?.data?.cards?.[2]?.card?.card?.info || {};
    const {itemCards} = resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{sla?.deliveryTime} min</h3>

            <h2>Menu..</h2>
            <ul>
                
                {
                    itemCards?.length &&
                    itemCards.map((item) => {
                        return (
                            <li key={item?.card?.info?.id}>
                                {item?.card?.info?.name} - {item?.card?.info?.price || item?.card?.info?.defaultPrice}
                            </li>
                        )
                    })
                }
                
                

            </ul>

        </div>
    );
};

export default Menu;

//data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.title
