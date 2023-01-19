import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NewsContext from '../../context/NewsContext/NewsContext';
import './navbar.css';

function Navbar() {
    const location = useLocation();
    const context = useContext(NewsContext);
    const {state, updateTheme} = context;
    return (
        <header className={state.theme?'header-dark':'header-light'}>
            <div className="header">
                <h1 className="logo">NewsN<span>i</span>njas</h1>
                <nav>
                    <ul className='cat-con'>
                        <li className={`category ${location.pathname === '/'  ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/'}>Home</Link></li>
                        <li className={`category ${location.pathname === '/business' ? state.theme ?'active-dark': 'active-light': ''}`}><Link to={'/business'}>Business</Link></li>
                        <li className={`category ${location.pathname === '/entertainment' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/entertainment'}>Entertainment</Link></li>
                        <li className={`category ${location.pathname === '/health' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/health'}>Health</Link></li>
                        <li className={`category ${location.pathname === '/sports' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/sports'}>Sports</Link></li>
                        <li className={`category ${location.pathname === '/science' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/science'}>Science</Link></li>
                        <li className={`category ${location.pathname === '/technology' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/technology'}>Technology</Link></li>
                    </ul>
                </nav>
                <div className="dm-btn" onClick={updateTheme}>
                    {state.theme?<img src="/logos/sun.png" alt="" id='dm-logo' title='Enable Light Mode'/>
                        : <img src="/logos/moon.png" alt="" id='dm-logo' title='Enable Dark Mode'/>       }
                </div>
            </div>
        </header>
    )
}

export default Navbar
