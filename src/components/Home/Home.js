import React from 'react';
import  './Home.css';
import Posts from '../../postData.json';
import Post from '../Post/Post';

const Home = () => {
    const posts = Posts;
    return (
        <main>
            <div className="container">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </main>
    );
};

export default Home;