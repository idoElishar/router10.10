import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Comp1 from './Users';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Basic from './Basic';
import Product from './Product';



const routes = [
    {
        path: '/',
        element: <Basic />
    },
    {
        path: '/products',
        element: <Product/>
    },
    {
        path: '/tasks',
        exact: true,
        element: <Comp1 />
    },
    {
        path: '/users/:id',
        element: <Comp2 />
    },
    {
        path: '/tasks/:id',
        element: <Comp3 />
    },
    {
        path: '/tasksDetails/:id',
        element: <Comp4 />
    }
];

const router = createBrowserRouter(routes);
export default router;
