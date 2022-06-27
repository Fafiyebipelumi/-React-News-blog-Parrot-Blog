import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogItem.css';

const BlogItem = ({ title, blogs }) => {
    return (
        <div className='blog-item'>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className='blog-container'>
                    <div className='blog-link'>
                        <h3>{blog.title}</h3>
                        <div className='blog-date-author'>
                            <p>{blog.datetime}</p>
                            <p>{blog.author}</p>
                        </div>
                        <Link to={`blogs/${blog.id}`}>
                            <p>{
                                (blog.body).length <= 200 ? blog.body : `${(blog.body).slice(0, 200)}...`
                            }read more &rarr;</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogItem;