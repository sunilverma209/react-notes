
import React from "react";

class UserClass extends React.Component {

    constructor( props ) {
        super(props);


        this.state = {
            count: 0,
            count2: 2,
        }
        console.log(props);
    }


    // Why writing super class always

    // Render method which will return some piece of JSX 
    // This JSX will be converted to HTML and display on the page
    render() {

        const { name } = this.props;
        const { count, count2 } = this.state;

        return(
            <div className="user-card">
                <h1>Count: { count } </h1>
                <h1>Count: { count2 } </h1>
                <h2>Class Component - User Based component</h2>
                <h3>Name: { name }</h3>
                <p>Location: United Kingdom</p>
                <p>Contct: @sunil.verma</p>
            </div>
        )

    }

}

export default UserClass;
