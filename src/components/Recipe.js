import React from 'react';
import PropTypes from "prop-types";


function Recipe(props){
  return (
    <>
      <div onClick = {() => props.onRecipeSelection(props.id)}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>{props.ingredients}</p>
        <p>{props.instructions}</p>
      </div>
    </>
  )
}

Recipe.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  onRecipeSelection: PropTypes.func
};

export default Recipe;

