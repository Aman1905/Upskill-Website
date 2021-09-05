import React from 'react'
import { Link } from 'react-router-dom';

import classes from  './Header.module.css';

const Header = (props) => {
    return (
        <div>
        <header className={ classes.header }>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" style={{'padding-left':'10px'}} href="#">
                    <img src="/images/LOGO.1.png" width="110" height="94" alt="Logo"/>
                </a>
            </nav>

            <nav className={ classes.navbar}>
                <ul className={ classes.navlinks}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/teams'>Our Team</Link>
                    </li>
                    <li>
                        <Link to='/events'>Events</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>

                    </li>
                </ul>
            </nav>
        </header>
        <main className={classes.main}>
         {props.children}
        </main>
        </div>
    );
}

export default Header
