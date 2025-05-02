import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import ApiClass from "./ApiClass";

class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <h1>About</h1>
            {/* <User name={"Sumedha"}></User> */}
            {/* <UserClass name={"Arin"} location={"Mumbai"}/> */}
            <ApiClass />

            </div>

        );
    };
}

export default About;