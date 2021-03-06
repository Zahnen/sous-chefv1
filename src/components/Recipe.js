import React from 'react';
import PropTypes from "prop-types";


function Recipe(props){

  return (
    <>
      <div onClick = {() => props.onRecipeSelection(props.id)}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
      </div>
    </>
  )
}

Recipe.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  ingredients: PropTypes.array,
  instructions: PropTypes.array,
  onRecipeSelection: PropTypes.func
};

export default Recipe;

