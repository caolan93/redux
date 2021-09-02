import { FETCH_GAMES } from '../constants/gamesConstants';

const initialState = {
	popular: [],
	newGames: [],
	upcomingGames: []
};

export const gamesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_GAMES:
			return { ...state };
		default:
			return { ...state };
	}
};
