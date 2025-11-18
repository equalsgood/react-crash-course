import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div>WORKS</div>}/>
            <Route path="posts" element={<Posts/>}/>
            <Route path="posts/:id" element={<PostPage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Navigate to="/posts" replace />}/>
        </Routes>
    );
};

export default AppRouter;