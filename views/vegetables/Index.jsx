
import React from "react";

function Index({ vegetables }) {
    return (
        <div>
            <h1>Vegetables</h1>
            <ul>
                {vegetables.map((vegetable, i) => {
                    return (
                        <li key={i}>
                            <a href={`/vegetables/${i}`}>{vegetable.name}</a> is
                            {vegetable.color} <br></br> and 
                            {vegetable.readyToEat ? ` It is ready to eat `: ` It is not ready to eat`}
                            <br />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

module.exports = Index;