import React from 'react';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar/Navbar';
// import Pagination from './components/Pagination/Pagination';
import AuthContextProvider from './contexts/AuthContextProvider';
import PostList from './pages/HomePage/PostList/PostList';
import { PostContextProvider } from './contexts/postsContext';


const App = () => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Navbar />
        <MainRoutes />
      </PostContextProvider>
    </AuthContextProvider>
  )
}

export default App