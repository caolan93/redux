import { FETCH_GAMES, UPCOMING_GAMES } from '../constants/gamesConstants';

const initialState = {
	popular: [],
	newGames: [],
	upcomingGames: []
};

export const gamesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_GAMES:
			return {
				...state,
				popular: payload.popular,
				upcomingGames: payload.upcoming
			};
		default:
			return { ...state };
	}
};
