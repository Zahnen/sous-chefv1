import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import firebase from "firebase/app";



function NewRecipeForm(props){
  const auth = useState(firebase.auth())
  const firestore = useFirestore();
  function addRecipeToFirestore(event) {
    event.preventDefault();
    props.onRecipeAdd();
    return firestore.collection('recipes').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        ingredients: event.target.ingredients.value,
        instructions: event.target.instructions.value,
        userId: auth[0].currentUser.uid
      }
    );
  }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addRecipeToFirestore}>
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
          <Button variant="success" type="submit">Add Recipe</Button>
        </Form>
      </div>
    </>
  );
}

NewRecipeForm.propTypes = {
  onRecipeAdd: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewRecipeForm;