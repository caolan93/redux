export const accountReducer = (state = 0, { type, payload }) => {
	switch (type) {
		case 'DEPOSIT':
			return state + payload;
		case 'WITHDRAW':
			return state - payload;
		default:
			return state;
	}
};
