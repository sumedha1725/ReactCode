import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    return <div className="user-card">
        <div>
            <h2>Count = {count}</h2>
            <button onClick={() => setCount(count + 1)}> Increase</button>
        </div>
        <h2>Name: {props.name}</h2>
        <h2>Location: Pune</h2>
        <h2>contact: @sumedha123</h2>


    </div>
}

export default User;