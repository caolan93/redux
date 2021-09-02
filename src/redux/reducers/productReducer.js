export const productReducer = (
	state = { products: [ { id: 1, title: 'Caolan', category: 'Programmer' } ] },
	{ type, payload }
) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};
