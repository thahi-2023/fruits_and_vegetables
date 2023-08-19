
import React from "react";

function Show({ fruit }) {
    return (
        <div>
            <h1>Fruits Show Page </h1>
            The {fruit.name} is {fruit.color}
            {fruit.readyToEat
                ? ". Its is ready to eat"
                : ". ew yuck!"}
        </div>
    );
}

module.exports = Show;