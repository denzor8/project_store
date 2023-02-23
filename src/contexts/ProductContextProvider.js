import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { ACTIONS, JSON_API_PRODUCTS } from '../helpers/consts';

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
	products: [],
	productsDetails: null,
};
const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ACTIONS.GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case ACTIONS.GET_PRODUCTS_DETAILS:
			return {
				...state,
				productsDetails: action.payload,
			};
		default:
			return state;
	}
};


const ProductsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	const navigate = useNavigate();
	const location = useLocation();

	const getProducts = async () => {
		const { data } = await axios(JSON_API_PRODUCTS);
		dispatch({
			type: ACTIONS.GET_PRODUCTS,
			payload: data,
		});
	}

	const values = {
		products: state.products,
		productsDetails: state.productsDetails,

		getProducts,
	}
	return (
		<productContext.Provider value={values}>
			{children}
		</productContext.Provider>
	)
}

export default ProductsContextProvider