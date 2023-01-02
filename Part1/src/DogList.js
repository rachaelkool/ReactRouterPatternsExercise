import React from "react";
import { Link } from "react-router-dom";


function DogList({dogs}) {

    return (
        <div>
            <h1>Dog List:</h1>
            {dogs.map(d => (
                <div key={d.name}>
                    <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                </div>
            ))}
        </div>
    );
}


export default DogList;