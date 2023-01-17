import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <header >
            <div className="header">
                <h1 className="logo">NewsN<span>i</span>njas</h1>
                <nav>
                    <ul className='cat-con'>
                        <li className='category'><Link to={'/'}>General</Link></li>
                        <li className='category'><Link to={'/business'}>Business</Link></li>
                        <li className='category'><Link to={'/entertainment'}>Entertainment</Link></li>
                        <li className='category'><Link to={'/health'}>Health</Link></li>
                        <li className='category'><Link to={'/sports'}>Sports</Link></li>
                        <li className='category'><Link to={'/science'}>Science</Link></li>
                        <li className='category'><Link to={'/technology'}>Technology</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
