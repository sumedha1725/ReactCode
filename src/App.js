import React from "react";
import ReactDOM from "react-dom/client"


const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/3e/f3/50/3ef3502f51c6c91f00d6dd3b2bfbf575.jpg" />
                    
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rsjpkmrbzsuppwinogwe" />
            <h4>{props.resName}</h4>
            <h5>{props.cuisine}</h5>
            <h5>{props.stars}</h5>
            <h5>{props.deliveryTime}</h5>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="KFC" cuisine="Pizza" stars="4.5 *" deliveryTime="20 min"/>
                <RestaurantCard resName="Dominos" cuisine="Pizza" stars="4.3 *" deliveryTime="35 min"/>
                <RestaurantCard />
                <RestaurantCard />
                

            </div>
        </div>
    )
}




const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);