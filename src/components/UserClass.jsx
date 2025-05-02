import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    console.log("constructor")
        this.state = {
            count : 0,
            count2 : 1,
        };
    }

    componentDidMount(){
        console.log("component did mount")
    }
    render() {

        console.log("Render")

        const { count,count2 } = this.state;

        return (
        <div className="user-card">
        <h2>Count : {count}</h2>
        <button onClick={()=>{
            this.setState({
                count : this.state.count +1,
            })
        }}>Increase</button>

        <button onClick={()=>{
            this.setState({
                count : this.state.count -1,
            })
        }}>Decrease</button>
        <h2>Count2 : {count2}</h2>

        <h2>Name: {this.props.name}</h2>
        <h2>Location: {this.props.location}</h2>
        <h2>contact: arin@123</h2>
    </div>
        );
    };
};

export default UserClass;