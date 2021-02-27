import formVisibleReducer from './form-visible-reducer';
import editingReducer from './editing-reducer';
import selectedRecipeReducer from './selected-recipe-reducer';
import { firestoreReducer } from 'redux-firestore';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  editing: editingReducer,
  selectedRecipe: selectedRecipeReducer,
  firestore: firestoreReducer
});

export default rootReducer;