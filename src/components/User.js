import { useState } from "react";


const User = ( props ) => {

    const [count, setCount ] = useState( 0 );



    // we can do without props rather in fly write props to name 
    // and use name 

    return (
        <div className="user-card">
            <h1> Count = {count } </h1>
            <h2>Functional Component - User Based component</h2>
            <h3>Name: { props.name } </h3>
            <p>Location: United Kingdom</p>
            <p>Contct: @sunil.verma</p>
        </div>
    )
}

export default User;
