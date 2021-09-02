import { combineReducers } from 'redux';
import { productReducer } from './accountReducer';

const allReducers = combineReducers({
	productReducer
});

export default allReducers;
