import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function NewColorForm({addColor}) {

    const [formData, setFormData] = useState({name: "", hex:"#ffffff"});
    const history = useHistory();

    const handleChange = e => {
        e.persist();
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addColor({ [formData.name]: formData.hex });
        history.push("/colors");
    }

    const {hex, name} = formData;

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Color name:</label>
            <input
                name="name"
                id="name"
                placeholder="Enter color name"
                onChange={handleChange}
                value={name}
            />
            </div>
            <div>
            <label htmlFor="hex">Color value:</label>
            <input
                type="color"
                name="hex"
                id="hex"
                onChange={handleChange}
                value={hex}
            />
            </div>
            <button>Add a new color!</button>
        </form>
        </div>
    );
}


export default NewColorForm;