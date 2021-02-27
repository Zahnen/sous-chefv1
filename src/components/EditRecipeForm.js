import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function EditRecipeForm(props){
  const firestore = useFirestore();
  const { recipe } = props;
  function updateRecipeInFirestore(event) {
    event.preventDefault();
    props.onEditRecipe();
    const propertiesToUpdate = {
      title: event.target.title.value,
      author: event.target.author.value,
      ingredients: event.target.ingredients.value,
      instructions: event.target.instructions.value
    }
    return firestore.update({collection: 'recipes', doc: recipe.id }, propertiesToUpdate);
  }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={updateRecipeInFirestore}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Author Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              name="ingredients"
              placeholder="Ingredients" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              type="text"
              name="instructions"
              placeholder="Instructions" />
          </Form.Group>
          <Button variant="success" type="submit">Submit Changes</Button>
        </Form>
      </div>
    </>
  );
}

EditRecipeForm.propTypes = {
  onEditRecipe: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default EditRecipeForm;