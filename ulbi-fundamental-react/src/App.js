import './styles/App.css';
import PostList from "./components/PostList";
import {useEffect, useState} from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import {usePosts} from "./hooks/usePosts";
import PostService from "./api/PostService";
import Loader from "./components/UI/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ searchQuery: '', selectedSort: '' });
    const [modal, setModal] = useState(false);
    const searchedAndSortedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);
    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const remove = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

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
        </main>
    );
}

export default App;
