import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div' , { id: 'parent' } , 
                [
                    React.createElement('div' , { id: 'child' } , 
                        [
                            React.createElement( 'h2' , { className: 'subheading' } , 'Hello React World H2 : Sub Child Class ' ) ,
                            React.createElement('h3' , { className: 'subheading' } , 'Hello React World H3 : Sub Child Class ' )
                        ]
                    ),
                    React.createElement('div' , { id: 'child2' } , 
                    [
                        React.createElement( 'h2' , { className: 'subheading2' } , 'Hello React World H2 : Sub Child Class ' ) ,
                        React.createElement('h3' , { className: 'subheading2' } , 'Hello React World H3 : Sub Child Class ' )
                    ]
                ),

                ]
) ;


// const root = ReactDOM.createRoot( document.getElementById('root') );
// if ( root && heading ) {
//     root.render( heading );
// }


/**
 *  JSX
 *  https://react.dev/learn/writing-markup-with-jsx
 *  JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. 
 *  This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
 */


const jsxheading = <h1>This is Heading From Heading</h1>; // Behind the seane its React Element

console.log( jsxheading );

const jsxheading2 = ( <h1>This is Heading From Heading</h1> ); // Behind the seane its React Element

console.log( jsxheading2 );

/**
 *  To create a component use Camel case and Start with capital letters
 *  Component should return JSX ==> JSX is eventualy React Element i.e Create root => and that React element is object => And we render that object HTML
 *  JSX code first get traspile before goes to browser, who is transpiling Parcel but is parcel doing no its Babel
 *  JSX => React.createElement => React.createElement ( object ) => HTMLElment render 
 *  JSX in single / Multipe line
 *  Single line JSX - const jsxheading = <h1>This is Heading From Heading</h1>;  
 *  But in Multiple line JSX we need to wrap in mandatory to wrap around bracket ()
 *  const jsxheading = ( <h1>This is Heading From Heading</h1> ); // This is valid JSX but not required ()
 *   
 */


const jsxheadingmultipleline = (
        <h1 className='jsx-multipleline' tabIndex="5">This is Heading From Heading</h1> ); // Behind the seane its React Element

console.log( jsxheading );



/**
 *  Components 
 *  Two types of componetns 
 *  - Class based components - Old way
 *  - Functional components - New Way expect legacy project
 */

// const TitleComponent = function {
//     return (<h2>This is heading component</h2>)
// }

/**
 * 
 * React componnent is also a Javascript function which return react elemnt it becomes React component
 * In one line we could skip return as well skip curly braces 
 */

const fn1 = () => true;

const fn2 = () => {
    return ture 
}


/**
 * 
 * Both fn1 , fn2 are same 
 */


const HeadingComponentSingleLine = () => <span>This is heading component Single Line</span>; // This component withou return and curly braces

const HeadingComponent = () => {
    return (<h2>This is heading component <HeadingComponentSingleLine /> </h2>)
}

// Comoonent using function its same without using arrow function but we will be using arrow function
const NewTitle = function () {
    return (<h2>This is NewTitle component <HeadingComponentSingleLine /> </h2>)
}

/**
 * Component composition 
 * Calling one component in another another component
 */

const root = ReactDOM.createRoot( document.getElementById('root') );
if ( root && jsxheading ) {
    root.render( <NewTitle/> );
}