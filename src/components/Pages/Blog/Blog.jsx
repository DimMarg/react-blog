/** IMPLEMENTATION WITH REACT QUERY AND REACT HOOK ( useEffect ) **/

/** Comment out for react hook implementation **/
//import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import usePostsData from "../../../hooks/usePostsData";

const Blog = () => {
    /** Comment out for react hook implementation **/
    // const [data, setPosts] = useState([]); // Χρησιμοποιούμε useState για να αποθηκεύσουμε τις αναρτήσεις
    // const [isloading, setLoading] = useState(true); // Χρησιμοποιούμε useState για να παρακολουθούμε τη φόρτωση

    const { data, isLoading, error } = usePostsData('posts', '/posts');

     /** Comment out for react hook implementation **/
    // useEffect hook to fetch the posts data when the component mounts.

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = await response.json();
    //     setPosts(data);
    //     setLoading(false);
    //     };

    //     fetchPosts();
    // }, []); // Run only once
    
    if (isLoading) return <p className="loader">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>

    return (
        <Container>
            <h1 className="title">Blog</h1>
            <ul className="posts">
                {data && data.map(post => (
                <li key={post?.id} className="post-title"><Link to={`/post/${post?.id}`}>{post?.title}</Link></li>
                ))}
            </ul>
        </Container>
        
    );
}

export default Blog;