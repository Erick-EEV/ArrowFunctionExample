import React, { Component } from 'react';

class ArrowFunctionExample extends Component {
    render() {




        //ES5 Function
        function helloWorld() {
            return console.log("Hello World")
        }
        
        //ES6 Arrow Function
        const helloGalaxy = () => { console.log("Hello Galaxy!") }
        
        helloWorld(); // Hello World
        helloGalaxy(); // Hello Galaxy!


        const nums = [12, 48, 22, 7, 95, 33]

        const randomNumES5 = nums.map(function(randNum) {
            return 5 + randNum
        })

        const randomNumES6 = nums.map(randNum => 5 + randNum)

        return (
            <div>
                
            </div>
        );
    }
}

export default ArrowFunctionExample;