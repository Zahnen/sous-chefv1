import * as c from './ActionTypes';

export const deleteRecipe = (id) => ({
  type: c.DELETE_RECIPE,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const selectRecipe = (recipe) => ({
  type: c.SELECT_RECIPE,
  selectedRecipe: recipe
});