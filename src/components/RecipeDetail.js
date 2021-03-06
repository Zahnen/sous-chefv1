import React from "react";
import PropTypes from "prop-types";
import {Row, Col, Button} from "react-bootstrap";

function RecipeDetail(props){
  const { recipe } = props;
  const ingredientsList = recipe.ingredients.map((item, index) => <li key={index}>{item}</li>);
  const instructionsList = recipe.instructions.map((item, index) => <li key={index}>{item}</li>);
  return (
    <>
      <h1>{recipe.title}</h1>
      <Row>
        <Col>
          <p>PlaceHolder {recipe.author}</p>
        </Col>
        <Col>
        <ul>{ingredientsList}</ul>
        </Col>
        <Col>
        <ul>{instructionsList}</ul>
        <Button onClick={ props.onClickingEdit } variant="warning">Update Recipe</Button>{' '}
        <Button onClick={()=> props.onClickingDelete(recipe.id) } variant="danger">Delete Recipe</Button>
        </Col>
      </Row>
    </>
  );
}

RecipeDetail.propTypes ={
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default RecipeDetail;