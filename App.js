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


const root = ReactDOM.createRoot( document.getElementById('root') );
if ( root && heading ) {
    root.render( heading );
}

