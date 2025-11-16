import React from 'react';
import PostItem from "./PostItem";

const PostList = ({title, posts, remove}) => {
    if(!posts.length)
        return (
            <div>Posts are not found</div>
        )

    return (
        <section>
            <h2 className='listTitle'>{title}</h2>
            <ol>
                { posts.map((post, index) => <PostItem remove={remove} post={post} number={index + 1} key={post.id} />)}
            </ol>
        </section>
    );
};

export default PostList;