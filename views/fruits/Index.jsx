
import React from "react";

function Index({fruits}) {
    return (
        <div>
            <nav>
            <a href="/fruits/new">Create New Fr</a>
            </nav>
            <ul>
                {fruits.map((fruit, i) => {
                    return (
                        <li key= {i}>
                            The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is{" "}
                            {fruit.color} <br></br>
                            {fruit.readyToEat
                                ? `It is ready to eat`
                                : `It is not ready to eat`}
                            <br />
                        </li>
                    );
                })}
            </ul>
            
        </div>

    );
}

module.exports = Index;