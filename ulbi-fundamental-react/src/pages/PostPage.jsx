import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import Loader from "../components/UI/Loader";

const PostPage = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchData, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchData();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>You have opened the page of the post with ID = {id}</h1>
            { isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>}
            <h2>Comments:</h2>
            { isCommentsLoading
                ? <Loader/>
                : <ul>
                    {comments.map(comment =>
                        <li key={comment.email}>
                            <h5>{comment.email}</h5>
                            <p>{comment.body}</p>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
};

export default PostPage;