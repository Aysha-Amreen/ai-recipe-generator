import React from 'react';

import Recipe from './Recipe';

const RecipesList = (props) => {

    return (
        <ul>
            {props.items.map((recipe) => (
            <Recipe
            key={recipe.id}
            title={recipe.title}
            img={recipe.img}
            />
            ))}
        </ul>
    );
}

export default RecipesList;