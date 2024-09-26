import { useState } from "react";
import useFetch from "../hooks/useFetch";

const About = () => {

    const [postid, setPostId] = useState(1)
    const { data: posts, loading, error } = useFetch(`posts/${postid}`)

    const togglePostId = () => setPostId(prevPostId => prevPostId + 1)

    return (<>
        <h1 className="cursor-pointer" onClick={togglePostId}>Posts {postid}</h1>

        {error && <p>{error}</p>}

        {loading ? <p>Loading...</p> : posts && <p>{posts.title}</p>}

        {/* <ul className="p-6">
            {posts && posts?.length > 0 ?
                posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
                : <li>Data not Found</li>}
        </ul> */}
    </>)

};

export default About;
