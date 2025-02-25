import React from 'react';
import '../css/Recipe.css';

const Recipe = (props) => {

    return ( 
        <div className='recipe-item'>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
            <p>{props.description}</p>        
        </div>
    )
}

export default Recipe;
