import { ActionTypes } from '../constants/productActions';

const { SET_PRODUCTS, SELECTED_PRODUCTS, REMOVE_SELECTED_PRODUCTS } = ActionTypes;

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: products
	};
};

export const selectedProducts = (products) => {
	return {
		type: SELECTED_PRODUCTS,
		payload: products
	};
};

// export const setProducts = (products) => {
// 	return {
// 		type: SET_PRODUCTS,
// 		payload: products
// 	};
// };
