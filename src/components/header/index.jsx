import React from "react";
import style from './Header.module.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <h1>Hebert's Blog</h1>
            </div>
            <nav className={style.navList}>
                <li>
                    <Link to='/'>github</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>contact</Link>
                </li>
            </nav>
        </header>
    )
}