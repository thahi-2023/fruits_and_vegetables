
import React from "react";

function Show({ vegetable }) {
    return (
        <div>
            <h1> The {vegetable.name}<br/>is {" "} {vegetable.color} </h1>
            {vegetable.readyToEat ? 'its ready to eat': 'ew yuck'}
        </div>
    );
}

module.exports = Show;