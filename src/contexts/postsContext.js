import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const postsContext = React.createContext();


export const PostContextProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(10);

	const API = 'http://localhost:8000/products'

	async function getPosts() {
		let res = await axios.get(`${API}?page=${firstPosts}`);
		let pagesCount = Math.ceil(posts.length / 2);
		setPosts(res.data);
		return pagesCount;
	}
	useEffect(() => {
		getPosts()
	}, [currentPage])

	const lastPosts = posts * totalPages
	const firstPosts = lastPosts - totalPages
	const currentPagePosts = posts.slice(firstPosts, lastPosts)
	console.log(currentPagePosts)

	const values = {
		posts: posts,
		currentPage: currentPage,
		totalPages: totalPages,
		lastPosts: lastPosts,
		
		getPosts,
	}
	return (
		<postsContext.Provider value={values}>
			{children}
		</postsContext.Provider>
	)
}