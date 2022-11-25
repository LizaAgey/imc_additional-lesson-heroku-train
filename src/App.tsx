import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type PostType = {
    id: number,
    body: string,
    title: string,
    userId: number
}

function App() {
    const [posts, setPosts] = useState<PostType[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    const showHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    };

    const deleteHandler = () => setPosts([])

    return (
        <div className="App">
            <button onClick={deleteHandler}>Clean</button>
            <button onClick={showHandler}>Display</button>

            {posts.map((post) => {
                return (
                    <ul key={post.id}>
                        <li>{post.title}</li>
                        <li>{post.body}</li>
                        <li>{post.userId}</li>
                    </ul>
                )
            })}


        </div>
    );
}

export default App;
