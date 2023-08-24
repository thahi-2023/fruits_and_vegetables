
import React from "react";

function Index({ vegetables }) {
    return (
        <div>
            <nav>
            <a href="/vegetables/new">Create New vegetables</a>
            </nav>
            <ul>
                {vegetables.map((vegetable, i) => {
                    return (
                        <li key={i}>
                            <a href={`/vegetables/${vegetable.id}`}>{vegetable.name}</a> is
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