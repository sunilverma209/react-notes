import React from "react";
import ReactDOM from "react-dom/client";
import User from "./src/components/User";
import UserClass from "./src/components/UserClass";

/**
 *  Header
 *    -Logo
 *    -Nav Items
 * 
 *  Body
 *    -Search
 *    -ResturantContainer
 *    -- ResturantCard
 *  Footer
 *    -Address
 *    -Contact
 */


const Header = () => {
     return (
        <div className="header">
            <div className="header__logo">Image</div>
            <div className="header__navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
     )
}


const ResturantCard = ( props ) => {
    console.log(props);
    // This prop is just a Javascript Object 

    return(
        <div className="resturant-card">
            <div className="resturant-card__inner">
                <h3>{props.resName}</h3>
                <p>{props.cusines}</p>
            </div>
        </div>
    )
}

// Destructing of props
// Destrucing in the fly
const ResturantCard_ = ( {resName , cusines } ) => {
    console.log(props);
    // This prop is just a Javascript Object 


    // or 
    // const {resName , cusines } = props; // These are just destrucing 


    return(
        <div className="resturant-card">
            <div className="resturant-card__inner">
                <h3>{props.resName}</h3>
                <p>{props.cusines}</p>
            </div>
        </div>
    )
}


// Props - Is short form of property
// Functional component in the end is Javascript function.
// Similay, Props are just argumnets of functions.
// Passing props is just pass

const Body = () => {
    return(
        <div className="body">
            <div className="body__search">Search</div>
            <div className="body__resturants">
                <ResturantCard resName="Meghana Foods" cusines="Briyani, North India, Asian" />
                <ResturantCard resName="KFC" cusines="Burger, Fast Food"/>
            </div>
        </div>
    )
}

/* Here we did component composition */

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body />
            <User name={ "Sunil Verma - function "}/>
            <UserClass name={ "Sunil Verma - class "} />
        </div>
    )
}


// Config Driven UI ( System Design )
// Like offers different in Location , Banglore etc 
// This is data driven by data 
// Backend API/Controlling UI is basis is driven by data
//

const root = ReactDOM.createRoot( document.getElementById("root") );
root.render( <AppLayout/> );
