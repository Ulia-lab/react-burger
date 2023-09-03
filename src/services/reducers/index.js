import { combineReducers } from 'redux';
import { fetchDataReducer } from './fetchData'
import { constructorItemsReducer } from './constructorItems'
import { modalIngredientsReducer } from './modalIngredients'
import { postOrderReducer } from './postOrder'
import { postPasswordResetReducer } from './postPasswordReset'

export const rootReducer = combineReducers({
    fetchData: fetchDataReducer,
    constructorItems: constructorItemsReducer,
    modalIngredients: modalIngredientsReducer,
    postOrder: postOrderReducer,
    postPasswordReset: postPasswordResetReducer,
  });