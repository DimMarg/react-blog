/** IMPLEMENTATION WITH REACT QUERY AND REACT HOOK ( USEEFFECT ) **/

/** Comment out for react hook implementation **/
// import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Container from "../../Container/Container";
import usePostsData from "../../../hooks/usePostsData";

const Post = () => {
    /** Comment out for react hook implementation **/
    
    // const [postData, setPostData] = useState([]);
    // const [isLoadingPost, setLoadingPostData] = useState(true);
    // const [commentsData, setCommentsData] = useState([]);
    // const [isLoadingComments, setLoadingComments] = useState(true);

    const { id } = useParams(); // Get the post ID from the route parameters.

    // Query to fetch the post details using the post ID.
    const {
        data: postData, // Post data from the API.
        isLoading: isLoadingPost, // Loading state for the post query.
        error: postError, // Error state for the post query.
    } = usePostsData(`post-content-${id}`, `/posts/${id}`);


    // Query to fetch the comments for the specific post.
    const {
        data: commentsData,
        isLoading: isLoadingComments,
        error: commentsError,
    } = usePostsData(`post-comments-${id}`, `/comments?postId=${id}`);

    // Check if either the post or comments are still loading.
    if (isLoadingPost || isLoadingComments) return <p className="loader">Loading...</p>;

    // Handle any errors that occurred during the queries.
    if (postError) return <p className="error">Error loading article: {postError.message}</p>;
    if (commentsError) return <p className="error">Error loading comments: {commentsError.message}</p>;

    /** Comment out for react hook implementation **/

    // useEffect hook to fetch the post data when the component mounts.
    // useEffect(() => {
    //     const fetchPostData = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Fetch post data based on the ID
    //     const data = await response.json();
    //     setPostData(data);
    //     setLoadingPostData(false);
    //     };

    //     fetchPostData();
    // }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

    // useEffect hook to fetch the comments data when the component mounts.

    // useEffect(() => {
    //     const fetchCommentsData = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`); // Fetch comments for the specific post ID
    //     const data = await response.json();
    //     setCommentsData(data);
    //     setLoadingComments(false);
    //     };

    //     fetchCommentsData();
    // }, []);

    
    // Render the post content and associated comments.
    return (
        <div className="post-view">
            <Container>
                <Link to={'/blog'} className='backlink'>Back to Blog</Link>
                <div className='post'>
                    <h1 className='title'>{postData?.title}</h1>
                    <p className='post-body'>{postData?.body}</p>
                    <p className='meta'>User ID: {postData?.userId}</p>
                </div>
                <div className='comments'>
                    <h2 className="title">Comments</h2>
                    <ul className='comment-list'>
                        {commentsData?.map(comment => (
                            <li key={comment?.id} className='comment'>
                                <h3 className='comment-name'>{comment?.name}</h3>
                                <p className='comment-body'>{comment?.body}</p>
                                <span className='comment-email'>{comment?.email}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Post;
