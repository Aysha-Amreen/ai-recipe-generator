import React from 'react';

import Recipe from './Recipe';
import "../css/RecipesList.css";

const RecipesList = (props) => {

    return (
        <div className='recipe-grid'>
            {props.items.map((recipe) => (
            <Recipe
            key={recipe.id}
            title={recipe.title}
            img={recipe.img}
            description={recipe.description}
            />
            ))}
        </div>
    );
}

export default RecipesList;