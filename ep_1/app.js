// nested html structure

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id: "chield",}, 
        [React.createElement("h1", {}, "I m h1 Tag"), 
        React.createElement("h2",{}, "I m h2 tag"), 
    ]),
    React.createElement("div", {id:"chield2"}, 
        [React.createElement("h1", {}, "I m h1 Tag"), 
        React.createElement("h2",{}, "I m h2 tag"), 
    ]),
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const heading = React.createElement("h1", {id:"heading"},"WElcome to my React page");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
