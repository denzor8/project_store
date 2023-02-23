import React from 'react';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar/Navbar';
import PostList from './pages/HomePage/PostList/PostList';
import { PostContextProvider } from './contexts/postsContext';
import AuthContextProvider from './contexts/AuthContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
// import Pagination from './components/Pagination/Pagination';


const App = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <Navbar />
          <MainRoutes />
          {/* <Pagination /> */}
        </PostContextProvider>
      </AuthContextProvider>
    </ProductContextProvider>
  )
}

export default App