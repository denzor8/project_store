import React, { useEffect } from 'react'
import { useProducts } from '../../../contexts/ProductContextProvider'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

const ProductsList = () => {
	const { products, getProducts } = useProducts()

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div>
			<div className='posts-list'>
				<h3>Products List</h3>
				{products.map(item => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default ProductsList