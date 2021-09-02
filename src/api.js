// const API_KEY = 'b53dad3d7c984362b6514ba152ec794a';

// // BASE URL
// const base_url = 'http://api.rawg.io/api/';

// // POPULAR GAMES

// const getCurrentMonth = () => {
// 	const month = new Date().getMonth() + 1;
// 	if (month < 10) {
// 		return `0${month}`;
// 	} else {
// 		return month;
// 	}
// };

// const getCurrentDay = () => {
// 	const month = new Date().getMonth();
// 	if (month < 10) {
// 		return `0${day}`;
// 	} else {
// 		return month;
// 	}
// };

// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => {
	`${base_url}${popular_games}`;
};

console.log(popular_games());
