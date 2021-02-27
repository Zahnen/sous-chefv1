import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedRecipe } = action;
  switch(action.type) {
  case c.SELECT_RECIPE:
    return selectedRecipe;
  default:
    return state;
  }
};