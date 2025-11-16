import './styles/App.css';
import PostList from "./components/PostList";
import {useMemo, useState} from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, name: '1Javascript', description: "bDescription" },
        { id: 2, name: '2Javascript 2', description: "aDescription" },
        { id: 3, name: '3Javascript 3', description: "cDescription" },
    ]);
    const [filter, setFilter] = useState({ searchQuery: '', selectedSort: '' });
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if(filter.selectedSort) {
            return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
        }
        return posts;
    },[filter.selectedSort, posts]);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.searchQuery.toLowerCase()));
    },[filter.searchQuery, sortedPosts]);

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
            <PostList remove={remove} title='Posts about JS' posts={searchedAndSortedPosts} />
        </main>
    );
}

export default App;
