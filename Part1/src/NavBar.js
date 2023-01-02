import React from "react"
import { NavLink } from "react-router-dom"


function NavBar({dogs}) {
    const links = dogs.map(dog => (
        <NavLink style={{marginRight: '2em'}} key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >{dog.name}</NavLink>
    ));

    return (
        <nav>
            <NavLink style={{marginRight: '2em'}} exact to="/dogs">Home</NavLink>
            {links}
        </nav>
    );
}


export default NavBar;