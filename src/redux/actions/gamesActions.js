import axios from 'axios';
import { popularGamesURL, upcomingGamesURL } from '../../api';
import { FETCH_GAMES, UPCOMING_GAMES } from '../constants/gamesConstants';

// ACTION CREATOR

export const loadGames = () => async (dispatch) => {
	// FETCH AXIOS
	const popularData = await axios.get(popularGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());
	dispatch({
		type: FETCH_GAMES,
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results
		}
	});
};
