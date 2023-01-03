import React from "react";
import { Link, Redirect } from "react-router-dom";


function Color({ hex, color }) {
    if (!hex) {
        return <Redirect to='/colors' />
    }

    return (
        <div style={{ backgroundColor: hex }}>
            <h1>{color}!</h1>
            <h3><Link to="/">Back to all colors</Link></h3>
        </div>
    );
}


export default Color;