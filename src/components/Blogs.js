import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';

const Blogs = () => {
    const [blogs, setBlogs] = useState(null);

    // Call API
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs')
                setBlogs(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getData()
    }, [])
    return (
        <div className='blogs'>
            {blogs && <BlogItem title='Parrot Blogs' blogs={blogs} />}
        </div>
    )
}

export default Blogs