import React from 'react';
import Button from "./UI/Button";
import {useNavigate} from "react-router";

const PostItem = ({ post, number, remove }) => {
    const { id, name, description, nodeRef } = post;
    const navigate = useNavigate();

    return (
        <li ref={nodeRef} className='post'>
            <div>
                <strong>{id}. {name}</strong>
                <p>{description}</p>
            </div>
            <div className="post-btns">
                <Button onClick={() => navigate(`${id}`)}>Open</Button>
                <Button onClick={() => remove(id)}>Delete</Button>
            </div>
        </li>
    );
};

export default PostItem;