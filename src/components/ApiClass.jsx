import React from "react";

class ApiClass extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        userInfo : {
            login : "Dummy",
            id : "123",
            url: "abc@gmail.com",
            },
        };
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sumedha25");
        const json = await data.json();
        this.setState(
            {
                userInfo : json,
            }
        );
        console.log(json);
    }
    
    render() {
        const {avatar_url, login, id, url} = this.state.userInfo;
        return (
        <div className="api">
        <img src={avatar_url}></img>
        <h2>id: {id} </h2>
        <h2>Name:{login}</h2>
        <h2>url: {url}</h2>
    </div>
        )
    
    };
};

export default ApiClass;