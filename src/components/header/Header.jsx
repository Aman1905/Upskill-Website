import React from 'react'
import { Link } from 'react-router-dom';

import classes from  './Header.module.css';

const Header = (props) => {
    return (
        <div>
        <header className={ classes.header }>
            <div className={classes.logo}>
                <img src="" alt="logo" />
            </div>
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
                        <Link to='/contact'>Contact us</Link>
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
