export function getCountProductsInCart() {
	const cart = JSON.parse(localStorage.getItem('cart'));
	return cart ? cart.products.length : 0;
}

export const calcSubPrice = product => +product.count * +product.item.price;


export const calcTotalPrice = products => {
	return products.reduce((pV, cur) => {
		return (pV += cur.subPrice);
	}, 0)
}



// {
// 	products: [
// 		{
// 			item: product 
// 			count 1,
// 			totalSubPrice: 100,
// 		},
// 		{
// 			item: product,
// 			count 20,
// 			totalSubPrice: 200,
// 		}
// 	],
// 	totalPrice: 1990,
// }