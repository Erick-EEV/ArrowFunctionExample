import React, { Component } from 'react';

class ArrowFunctionExample extends Component {
    render() {




        //ES5 Function
        function helloWorld() {
            return console.log("Hello World")
        }
        
        //ES6 Arrow Function
        const helloGalaxy = () => { console.log("Hello Galaxy!") }
        


        return (
            <div>
                
            </div>
        );
    }
}

export default ArrowFunctionExample;