import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PostList from './pages/HomePage/PostList/PostList';
// import Content from './components/Pagination/Pagination';
import AdminPage from './pages/AdminPage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductPage';
import EditProductPage from './pages/EditProductPage';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/register',
            element: <RegistrationPage />,
            id: 1
        },
        {
            link: '/login',
            element: <LoginPage />,
            id: 2
        },
        {
            link: '/',
            element: <PostList />,
            id: 3
        },
        {
            link: '*',
            element: <NotFoundPage />,
            id: 4
        },
        {
            link: '/admin',
            element: <AdminPage />,
            id: 5
        },
        {
            link: '/products',
            element: <ProductPage />,
            id: 6
        },
        {
            link: '/details/:id',
            element: <ProductDetailsPage />,
            id: 7
        },
        {
            link: '/edit/:id',
            element: <EditProductPage />,
            id: 8
        },
    ];

  return (
    <Routes>
        {PUBLIC_ROUTES.map(item => (
            <Route path={item.link} element={item.element} key={item.id} />
        ))}
    </Routes>
  )
}

export default MainRoutes