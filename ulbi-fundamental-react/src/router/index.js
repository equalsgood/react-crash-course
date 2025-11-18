import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import {Navigate} from "react-router";
import React from "react";
import Login from "../pages/Login";

export const privateRoutes = [
    { path: 'about', element: <About/> },
    { path: 'posts', element: <Posts/> },
    { path: 'posts/:id', element: <PostPage/> },
    { path: '*', element: <Navigate to="/posts" replace /> },
]

export const publicRoutes = [
    { path: 'login', element: <Login/> },
    { path: '*', element: <Navigate to="/login" replace /> },
]