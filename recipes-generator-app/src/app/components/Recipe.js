import React from 'react';

const Recipe = (props) => {

    return (    
        <li>
        <h3>{props.title}</h3>
        <img src={props.img} alt={props.title}/>        
        </li>
    )
}

export default Recipe;
