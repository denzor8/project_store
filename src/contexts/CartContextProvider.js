import React, { createContext, useContext, useReducer } from 'react';
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../helpers/functions'
import { CART } from '../helpers/consts'

const cartContext = createContext();
export const useCart = () => {
	return useContext(cartContext);
}

const INIT_STATE = {
	cart: JSON.parse(localStorage.getItem('cart')),
	cartLength: getCountProductsInCart(),
}

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case CART.GET_CART:
			return { ...state, cart: action.payload }
		case CART.GET_CART_LENGTH:
			return { ...state, cartLength: action.payload }
		default:
			return state
	}
}


const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	const values = {
		cart: state.cart,
		cartLength: state.cartLength,
	}
	return (
		<cartContext.Provider value={values}>
			{children}
		</cartContext.Provider>
	)
}

export default CartContextProvider