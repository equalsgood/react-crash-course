import React from 'react';
import Button from "./UI/Button";

const PostItem = ({ post, number, remove }) => {
    const { id, name, description } = post;

    return (
        <li className='post'>
            <div>
                <strong>{number}. {name}</strong>
                <p>{description}</p>
            </div>
            <Button onClick={() => remove(id)}>Delete</Button>
        </li>
    );
};

export default PostItem;