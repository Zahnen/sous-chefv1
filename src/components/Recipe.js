import React from 'react';
import PropTypes from "prop-types";


function Recipe(props){

  const ingredientsList = props.ingredients.map((item) => <li>{item}</li>);
  const instructionsList = props.instructions.map((item) => <li>{item}</li>);
  return (
    <>
      <div onClick = {() => props.onRecipeSelection(props.id)}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <ul>{ingredientsList}</ul>
        <ul>{instructionsList}</ul>
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

