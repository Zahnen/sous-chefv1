import React from "react";
import PropTypes from "prop-types";
import {Row, Col, Button} from "react-bootstrap";

function RecipeDetail(props){
  const { recipe } = props;
  return (
    <>
      <h1>{recipe.title}</h1>
      <Row>
        <Col>
          <p>PlaceHolder {recipe.author}</p>
        </Col>
        <Col>
        <p>PlaceHolder {recipe.ingredients}</p>
        </Col>
        <Col>
        <p>PlaceHolder {recipe.instructions}</p>
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