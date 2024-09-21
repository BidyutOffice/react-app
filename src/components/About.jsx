import { useEffect, useState } from "react";

const About = () => {

    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [postid, setPostId] = useState(1)

    const togglePostId = () => setPostId(prevPostId => prevPostId + 1)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
                const data = await response.json()
                setPosts(data)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false)
            }
        }
        get()
    }, [postid])

    return (<>
        <h1 className="cursor-pointer" onClick={togglePostId}>Posts {postid}</h1>
        {loading && <p>Loading...</p>}
        {posts && <p>{posts.title}</p>}
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
