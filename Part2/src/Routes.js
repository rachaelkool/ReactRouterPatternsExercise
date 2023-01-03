import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";


function Routes() {

    const initialColors = {
        red: "#FF0000",
        yellow: "#FFFF00",
        green: "#00FF00",
        blue: "#0000FF",
        pink: "#FF00FF"
    };
    const [colors, setColors] = useState(initialColors);

    function handleAdd(newColor) {
        setColors(colors => ({ ...colors, ...newColor }));
    }

    // const { color } = useParams();

    function renderColor(props) {
        const { color } = props.match.params;
        const hex = colors[color];
        return <Color hex={hex} color={color} />;
    };

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/colors">
                <ColorList colors={colors} />
            </Route>
            <Route exact path="/colors/new">
                <NewColorForm addColor={handleAdd} />
            </Route>
            <Route path="/colors/:color" render={renderColor} />
            <Redirect to="/colors" />
        </Switch>
        </BrowserRouter>
    );
}


export default Routes;