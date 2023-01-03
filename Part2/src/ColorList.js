import React from "react";
import { Link } from "react-router-dom";


function ColorList({colors}) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
        <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div>
            <h1>Welcome to the color factory.</h1>
            <h2>Select a color!</h2>
            <ul>{colorLinks}</ul>
            <h3><Link to="/colors/new">Add a color</Link></h3>
        </div>
    );
}

export default ColorList;
