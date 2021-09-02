import { combineReducers } from 'redux';
import { gamesReducer } from './gamesReducer';

export const allReducers = combineReducers({
	games: gamesReducer
});
