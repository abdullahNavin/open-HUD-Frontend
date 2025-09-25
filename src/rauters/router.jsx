import React from 'react';
import { createBrowserRouter } from "react-router";
import MainHome from '../pages/MainHome';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainHome/>
    }
])

export default router;