import React, {useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";

const PostForm = ({ addPostHandler }) => {
    const [postName, setPostName] = useState('');
    const [postDescription, setPostDescription] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            name: postName,
            description: postDescription,
        }

        addPostHandler(newPost);
        setPostName('');
        setPostDescription('');
    }

    return (
        <form>
            <Input value={postName} onChange={(e) => setPostName(e.target.value)} type='text'
                   placeholder='Name of the post'/>
            <Input value={postDescription} onChange={(e) => setPostDescription(e.target.value)} type='text'
                   placeholder='Description of the post'/>
            <Button onClick={clickHandler}>Create</Button>
        </form>
    );
};

export default PostForm;