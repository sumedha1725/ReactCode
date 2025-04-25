import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockdata";

const Body = () => {
    const[listOfRestaurents, setListOfRestaurents] = useState(resList);
    //     {
    //       data: {
    //         id: "1",
    //         name: "Dominos",
    //         cuisines: ["Burgers", "Coffee", "Pizza"],
    //         costForTwo: 40000,
    //         deliveryTime: 30,
    //         avgRatting: "3.8",
    //       },
    //     },
    //     {
    //       data: {
    //         id: "2",
    //         name: "KFC",
    //         cuisines: ["Burgers", "Coffee", "Pizza"],
    //         costForTwo: 50000,
    //         deliveryTime: 39,
    //         avgRatting: "4.2",
    //       },
    //     },
    //     {
    //         data: {
    //           id: "3",
    //           name: "MacD",
    //           cuisines: ["Burgers", "Coffee", "Pizza"],
    //           costForTwo: 40000,
    //           deliveryTime: 30,
    //           avgRatting: "4.4",
    //         },
    //       },
    //   ]);
      
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurents.filter(
                    (res) => res.data.avgRatting > 4); 
                    setListOfRestaurents(filteredList);
                    }}>
                        Top Rated Restaurents
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurents.map((restaurent) => (
                    <RestaurantCard key={restaurent.data.id} resData={restaurent} />
                ))}

                {/* <RestaurantCard resName="KFC" cuisine="Pizza" stars="4.5 *" deliveryTime="20 min"/>
                <RestaurantCard resName="Dominos" cuisine="Pizza" stars="4.3 *" deliveryTime="35 min"/>
                <RestaurantCard />
                <RestaurantCard /> */}
                

            </div>
        </div>
    )
}
export default Body;