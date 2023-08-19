
import React from "react";

function Show({ vegetable }) {
    return (
        <div>
            <h1> The {veggies.name}is {veggies.color} </h1>
            {vegetable.readyToEat ? 'its ready to eat': 'ew yuck'}
        </div>
    );
}

module.exports = Show;