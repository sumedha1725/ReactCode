import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    //authentication
    useEffect(() => {
        //make api call and send username and password
        const data ={
            name : "sumedha",
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser : userName, setUserName }}>
        <div className="app">
            <Header></Header>
            {/* <Body /> */}
            <Outlet />
        </div>
        </UserContext.Provider>
    );
};

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element : <AppLayout/>,
//         errorElement: <Error />
//     },
//     {
//         path: "/about",
//         element: <About  />,
//     },

//     {
//         path : "/contact",
//         element: <Contact />,
//     },
// ])

// To Show header component in my all pages we have to make this component the childern of Applayout component

const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <AppLayout/>,
            children : [
                {
                    path : "/",
                    element : <Body />,

                },
                {
                    path: "/about",
                    element: <About  />,
                },
            
                {
                    path : "/contact",
                    element: <Contact />,
                },
                {
                    path : "/cart",
                    element: <Cart />,
                },
                {
                    path : "/grocery",
                    element: (
                    <Suspense fallback= {<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                    ),
                },
                {
                    path : "/menu/:resId",
                    element : <Menu />,
                },
            ],
            errorElement : <Error />
        },
    //     
    ])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />)