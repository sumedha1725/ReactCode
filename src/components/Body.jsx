import { useEffect, useState } from "react";
import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const[listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredRestaurent, setFilteredRestaurent] = useState([])


    const[searchText, setSearchText] = useState("");

    const RestaurentCardOpen = withOpenLabel(RestaurantCard);

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
    //   useEffect(()=>{
    //     console.log("useEffect Called..!")
    //   }, []);
    console.log(listOfRestaurents);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.593674449063272&lng=73.78601700669863&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h2>Looks Like U r Offline!! plz check ur Internet</h2> 




    //Conditional Rendering
    // if (listOfRestaurents.length === 0){
    //     // return <h1>Loading...</h1>
    //     return <Shimmer />;
    // }

    //using ternary operator

    return listOfRestaurents.length === 0? <Shimmer /> : (
        <div className="body">
            <div className="filter flex m-[8] ">
                <div className="search m-[10px] p-[10px]">
                    <input type="text" className="border border-solid border-red" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button  className= "px-[8px] bg-green-100 m-[8]"
                    onClick={()=> {
                        //filetr the restaurent card and updates its UI
                            console.log(searchText);
                            const filteredRest = listOfRestaurents.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            // setListOfRestaurents(filteredRest);
                            setFilteredRestaurent(filteredRest)
                    }}>Search</button>

                </div>
                <button className="px-[10px] m-[30px] bg-pink-500 rounded-lg" 
                onClick={() => {
                    const filteredList = listOfRestaurents.filter(
                    (res) => res.info.avgRating > 4); 
                    // setListOfRestaurents(filteredList);
                    setFilteredRestaurent(filteredList)
                    }}>
                        Top Rated Restaurents
                </button>
            </div>
            <div className="res-container flex justify-between flex-wrap">
                {filteredRestaurent.map((restaurent) => (
                    <Link key={restaurent?.info?.id} to= {"/menu/"+restaurent.info.id}>

                       {restaurent?.info?.isOpen ? (<RestaurentCardOpen resData={restaurent}/> ): (<RestaurantCard resData={restaurent} />)
                        }
                    </Link>
                        
                        
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