import React from "react";
import { useParams, Redirect } from "react-router-dom";

function DogDetails({dogs}) {

    let dog = {};

    const {name} = useParams();

    if (name) {
        const currentDog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        if (!currentDog) {
            return <Redirect to='/dogs' />
        }
        dog = currentDog;
    }

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <h3>Age: {dog.age} yrs old</h3>
            <h3>Facts:
                <ul>
                {dog.facts.map((fact, f) => (
                    <li key={f}>{fact}</li>
                ))}
                </ul>
            </h3>
        </div>
    );
}


export default DogDetails;