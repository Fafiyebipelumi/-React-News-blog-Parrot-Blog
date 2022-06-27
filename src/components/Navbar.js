import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Parrot News.</h2>
            <ul className='navbar-list'>
                <li className='navbar-item'><Link to='/'>Home</Link></li>
                <li className='navbar-item'><Link to='/blogs'>Blogs</Link></li>
                <li className='navbar-item'><Link to='/create'>Create New Blog</Link></li>
            </ul>
        </div>
    )
}

export default Navbar