import './styles/App.css';
import PostList from "./components/PostList";
import {useState} from "react";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, name: 'Javascript', description: "Description" },
        { id: 2, name: 'Javascript 2', description: "Description" },
        { id: 3, name: 'Javascript 3', description: "Description" },
    ]);

    const addPostHandler = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const remove = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <main className="App">
            <PostForm addPostHandler={addPostHandler} />
            <PostList remove={remove} title='Posts about JS' posts={posts} />
        </main>
    );
}

export default App;
