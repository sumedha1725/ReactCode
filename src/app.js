import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {id:"heading"}, "Hello");


//JSX

// const reactelement = <h1 id="heading">With Jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(reactelement);


//react functional component(syntax)

// function MyComponent(){
//     return <h1>functional component</h1>
// };


//using arrow function
// const MyHeading = () =>{
//     return <h1>functional component</h1>
// };


//without return keyword
// const MyHeading = () =>(
//  <h1>functional component</h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(< MyHeading/>);




//if we have two components

// const Title = () =>(
//     <h1 className="head">Using JSX</h1>
// );

// //if u want to render title inside myheading component 

// const MyHeading = () => (
//     <div id= "container">
//         <Title />
//         <h1 className="heading">functional Components</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyHeading/>);


//you can declare your variable like {number}
const Title = () =>(
        <h1 className="head">Using JSX</h1>
    );

const number = 1000

const MyHeading = () => (
    <div id= "container">
        {/* {number}         */}
        <h2>{number}</h2>
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading">functional Components</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyHeading/>);