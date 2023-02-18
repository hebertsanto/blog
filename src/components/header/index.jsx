import React from "react";
import style from './Header.module.css';

export const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <h1>Hebert's Blog</h1>
            </div>
        </header>
    )
}