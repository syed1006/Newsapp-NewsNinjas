import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    const location = useLocation();
    return (
        <header className='header-light'>
            <div className="header">
                <h1 className="logo">NewsN<span>i</span>njas</h1>
                <nav>
                    <ul className='cat-con'>
                        <li className={`category ${location.pathname === '/' ? 'active' : ''}`}><Link to={'/'}>Home</Link></li>
                        <li className={`category ${location.pathname === '/business' ? 'active' : ''}`}><Link to={'/business'}>Business</Link></li>
                        <li className={`category ${location.pathname === '/entertainment' ? 'active' : ''}`}><Link to={'/entertainment'}>Entertainment</Link></li>
                        <li className={`category ${location.pathname === '/health' ? 'active' : ''}`}><Link to={'/health'}>Health</Link></li>
                        <li className={`category ${location.pathname === '/sports' ? 'active' : ''}`}><Link to={'/sports'}>Sports</Link></li>
                        <li className={`category ${location.pathname === '/science' ? 'active' : ''}`}><Link to={'/science'}>Science</Link></li>
                        <li className={`category ${location.pathname === '/technology' ? 'active' : ''}`}><Link to={'/technology'}>Technology</Link></li>
                    </ul>
                </nav>
                <div className="dm-btn">
                    <img src="/logos/moon.png" alt="" id='dm-logo' title='Enable Dark Mode'/>
                    {/* <label>Dark mode</label> */}
                </div>
            </div>
        </header>
    )
}

export default Navbar
