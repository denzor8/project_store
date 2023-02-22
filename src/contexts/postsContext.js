import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const postsContext = React.createContext();


export const PostContextProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const API = 'http://localhost:8000/products'

	async function getPosts() {
		let res = await axios.get(`${API}?page=`);
		setPosts(res.data);
		console.log(res.data)
	}
	useEffect(() => {
    getPosts()
	}, [])

	const values = {
		posts: posts,
		getPosts,
	}
	return (
		<postsContext.Provider value={values}>
			{children}
		</postsContext.Provider>
	)
}