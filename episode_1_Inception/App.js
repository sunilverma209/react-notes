/**
 *  Task One
 * 
 */

// const heading = React.createElement('h1' , {} , 'Hello React World H1 Tag ' ) ;
// const root = ReactDOM.createRoot( document.getElementById('root') );
// if ( root && heading ) {
//     root.render( heading );
// }


/* Task 2 : Create An Parent child structure */
/**
 * <div id="parent">
 * <div id="child">
 * <h2>Sub Child </h2>
 * </div>
 * </div>
 * 
 */

// const heading = React.createElement('div' , { id: 'parent' } , 
//                 React.createElement('div' , { id: 'child' } , 
//                 React.createElement('h2' , { class: 'subheading' } , 'Hello React World : Sub Child Class ' ) )
// ) ;


// const root = ReactDOM.createRoot( document.getElementById('root') );
// if ( root && heading ) {
//     root.render( heading );
// }


/* Task 3 : Create An Parent child structure  as well sblings h2, h3 */
/**
 * <div id="parent">
 * <div id="child">
 * <h2>Sub Child </h2>
 * </div>
 * </div>
 * 
 */


// const heading = React.createElement('div' , { id: 'parent' } , 
//                 React.createElement('div' , { id: 'child' } , 
//                 [
//                     React.createElement( 'h2' , { class: 'subheading' } , 'Hello React World H2 : Sub Child Class ' ) ,
//                     React.createElement('h3' , { class: 'subheading' } , 'Hello React World H3 : Sub Child Class ' )
//                 ]
//     )
// ) ;


// const root = ReactDOM.createRoot( document.getElementById('root') );
// if ( root && heading ) {
//     root.render( heading );
// }


/* Task 4 : Create An Parent child structure  as well sblings h2, h3 */
/**
 * <div id="parent">
 * <div id="child">
 * <h2>Sub Child </h2>
 * </div>
 * <div id="child2">
 * <h2>Sub Child 2</h2>
 * </div>
 * </div>
 * 
 */

/**
 *  As now this become so untidy and structure so to resolve this we have JSX.
 *  JSX make life easy
 *  This is last time we are using React.createElment time to say by React.createElment
 *  React 18 we are learing
 *  
 */

const heading = React.createElement('div' , { id: 'parent' } , 
                [
                    React.createElement('div' , { id: 'child' } , 
                        [
                            React.createElement( 'h2' , { class: 'subheading' } , 'Hello React World H2 : Sub Child Class ' ) ,
                            React.createElement('h3' , { class: 'subheading' } , 'Hello React World H3 : Sub Child Class ' )
                        ]
                    ),
                    React.createElement('div' , { id: 'child2' } , 
                    [
                        React.createElement( 'h2' , { class: 'subheading2' } , 'Hello React World H2 : Sub Child Class ' ) ,
                        React.createElement('h3' , { class: 'subheading2' } , 'Hello React World H3 : Sub Child Class ' )
                    ]
                ),

                ]
) ;


const root = ReactDOM.createRoot( document.getElementById('root') );
if ( root && heading ) {
    root.render( heading );
}

