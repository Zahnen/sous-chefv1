import React from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'; //hook that allows to listen for changes to Firestore w/o using an HOC

function RecipeList(props){
  useFirestoreConnect([
    { collection: 'recipes' }
  ]);

  const recipes = useSelector(state => state.firestore.ordered.recipes);

  if (isLoaded(recipes)){
  return(
    <React.Fragment>
      <div className="container">
        <hr/>
        {recipes.map((recipe) => {
          return <Recipe
            onRecipeSelection = { props.onRecipeSelection }
            title = {recipe.title}
            author = {recipe.author}
            ingredients = {recipe.ingredients}
            instructions = {recipe.instructions}
            id={recipe.id}
            key={recipe.id}/>
        })}
      </div>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

RecipeList.propTypes = {
  onRecipeSelection: PropTypes.func
};

export default RecipeList;