import React from "react";
import RecipeDetail from "./RecipeDetail";
import RecipeList from "./RecipeList";
import NewRecipeForm from "./NewRecipeForm";
import EditRecipeForm from "./EditRecipeForm";
import * as a from './../actions';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class RecipeControl extends React.Component {

  handleAddingRecipe = (newRecipe) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleSelectingRecipe = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.get({collection: 'recipes', doc: id}).then((recipe) => {
      const firestoreRecipe = {
        title: recipe.get("title"),
        author: recipe.get("author"),
        ingredients: recipe.get("ingredients"),
        instructions: recipe.get("instructions"),
        id: recipe.id
      }
      const action = a.selectRecipe(firestoreRecipe);
      dispatch(action);
    });
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleEditingRecipe = (recipeToEdit) => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
    const id = this.props.selectedRecipe.id;
    this.props.firestore.get({collection: 'recipes', doc: id}).then((recipe) => {
      const firestoreRecipe = {
        title: recipe.get("title"),
        author: recipe.get("author"),
        ingredients: recipe.get("ingredients"),
        instructions: recipe.get("instructions"),
        id: recipe.id
      }
      const action2 = a.selectRecipe(firestoreRecipe);
      dispatch(action2);
    });
  }

  handleDeletingRecipe = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.delete({collection: 'recipes', doc: id});
    const action = a.selectRecipe(null);
    dispatch(action);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedRecipe != null) {
      if(this.props.editing){
        const action = a.toggleEdit();
        dispatch(action);
      }
      const action2 = a.selectRecipe(null);
      dispatch(action2);
      if(this.props.formVisible){
      const action3 = a.toggleForm();
      dispatch(action3);
      }
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  render(){
    const auth = this.props.firebase.auth();
    // if (!isLoaded(auth)) {
    //   return (
    //     <>
    //       <h1>Loading...</h1>
    //     </>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
    //   return (
    //     <>
    //       <h1>You must be signed in to access Sous Chef.</h1>
    //     </>
    //   )
    // }
    if (isLoaded(auth)) { //user auth check goes back here
      let currentState = null;
      let buttonText = null;
      if (this.props.editing){
        currentState = <EditRecipeForm recipe = {this.props.selectedRecipe} onEditRecipe = {this.handleEditingRecipe} />;
        buttonText = "Back to Recipe Feed";
      } else if (this.props.formVisible) {
        currentState=<NewRecipeForm onRecipeAdd={this.handleAddingRecipe} />;
        buttonText = "Back to Recipe Feed";
      } else if (this.props.selectedRecipe != null) {
        currentState =
        <RecipeDetail
        recipe = {this.props.selectedRecipe}
        onClickingDelete = {this.handleDeletingRecipe}
        onClickingEdit = {this.handleEditClick} />;
        buttonText = "Back to Recipe Feed";
      } else {
        currentState = <RecipeList onRecipeSelection={this.handleSelectingRecipe} />;
        buttonText = "Add a New Recipe";
      }

      return(
        <>
          <button style={{float: 'right', marginBottom: '30px'}} onClick={this.handleClick} className='btn btn-warning'>{buttonText}</button>
          <br/>
          {currentState}
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    formVisible: state.formVisible,
    selectedRecipe: state.selectedRecipe,
    editing: state.editing
  }
}

RecipeControl = connect(mapStateToProps)(RecipeControl);

export default withFirestore(RecipeControl);