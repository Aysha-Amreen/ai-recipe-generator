import React from 'react';
import '../css/Recipe.css';
import React, { useState } from 'react';

const EditRecipe = ({ recipe, onUpdate }) => {
    const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedRecipe({ ...editedRecipe, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editedRecipe);
    };

    return (
        <div className='edit-recipe'>
            <h2>Edit Recipe</h2>
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={editedRecipe.title}
                onChange={handleChange}
            />
            <label>Image URL:</label>
            <input
                type="text"
                name="img"
                value={editedRecipe.img}
                onChange={handleChange}
            />
            <label>Description:</label>
            <textarea
                name="description"
                value={editedRecipe.description}
                onChange={handleChange}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default EditRecipe;
