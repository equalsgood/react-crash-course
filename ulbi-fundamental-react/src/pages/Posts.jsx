import PostList from "../components/PostList";
import {createRef, useEffect, useRef, useState} from "react";
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
import {useObserver} from "../hooks/useObserver";
import Select from "../components/UI/Select";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ searchQuery: '', selectedSort: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const searchedAndSortedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        const newPosts = response.data.map(post => {
            const { userId, id, title, body } = post;
            return { id, userId, name: title, description: body, nodeRef: createRef() };
        });
        setPosts([...posts, ...newPosts]);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    const observerCallback = () => {
        setPage(prev => prev + 1);
    }

    useObserver(lastElement, observerCallback, isLoading, page < totalPages && posts.length > 0)

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const remove = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    const changePageHandler = (page) => {
        setPage(page);
    };

    console.log(posts);
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
            <Select
                value={limit}
                onChange={value => {
                    setPosts([]);
                    setPage(0);
                    setLimit(value)
                }}
                defaultValue="Elements amount on the page"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Show all' },
                ]}
            />
            { postError && <h1>Error occurred ${postError}</h1>}
            <PostList remove={remove} title='Posts about JS' posts={searchedAndSortedPosts} />
            <div ref={lastElement} style={{height: 20, background: 'red'}} />
            { isLoading && <Loader/> }
            <Pagination totalPages={totalPages} currentPage={page} onClick={changePageHandler}/>
        </main>
    );
}

export default Posts;
