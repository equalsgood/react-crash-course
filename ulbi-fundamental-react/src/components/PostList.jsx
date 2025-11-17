import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, remove}) => {
    if(!posts.length)
        return (
            <div>Posts are not found</div>
        )

    return (
        <section>
            <h2 className='listTitle'>{title}</h2>
            <TransitionGroup>
                { posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        nodeRef={post.nodeRef}
                    >
                        <PostItem remove={remove} post={post} number={index + 1} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </section>
    );
};

export default PostList;