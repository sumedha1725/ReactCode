import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import ApiClass from "./ApiClass";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <h1>About</h1>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h2>{loggedInUser}</h2>}
                </UserContext.Consumer>
            </div>
            {/* <User name={"Sumedha"}></User> */}
            {/* <UserClass name={"Arin"} location={"Mumbai"}/> */}
            <ApiClass />

            </div>

        );
    };
}

export default About;