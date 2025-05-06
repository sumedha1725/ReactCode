import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-1/8" src={LOGO_URL} />
                    
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="p-[30px]">
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="p-[30px]">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="p-[30px]">
                        <Link to = "/about">About Us</Link>
                    </li>
                    <li className="p-[30px]">
                        <Link to ="/contact">Contact Us</Link>
                    </li>
                    <li className="p-[30px]">
                        <Link to = "/cart">Cart</Link>
                    </li>
                    <li className="p-[30px]">
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    
                    <button className="login" onClick={() => {
                        btnName ==="Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}> {btnName}</button>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;