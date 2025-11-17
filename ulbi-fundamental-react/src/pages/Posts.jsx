import PostList from "../components/PostList";
import {createRef, useEffect, useState} from "react";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
import {usePosts} from "../hooks/usePosts";
import PostService from "../api/PostService";
import Loader from "../components/UI/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ searchQuery: '', selectedSort: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const searchedAndSortedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data.map(post => {
            const { userId, id, title, body } = post;
            return { id, userId, name: title, description: body, nodeRef: createRef() };
        }));

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const remove = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    const changePageHandler = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <main className="App">
            <Button additionalClasses={['create-user-button']} onClick={() => setModal(true)}>
                Create a user
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm addPostHandler={addPostHandler} />
            </Modal>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter} />
            { postError && <h1>Error occurred ${postError}</h1>}
            { isLoading
                ? <Loader/>
                : <PostList remove={remove} title='Posts about JS' posts={searchedAndSortedPosts} />
            }
            <Pagination totalPages={totalPages} currentPage={page} onClick={changePageHandler}/>
        </main>
    );
}

export default Posts;
