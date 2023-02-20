import React from "react";
import style from './Header.module.css';
import { Title } from "../Title";

export const Header = () => {
    const NAME_BLOG = `Hebert's Blog`;
    
    return (
        <header className={style.header}>
            <div>
                <Title Variant={`h4`} Component={`h4`}>{NAME_BLOG}</Title>
            </div>
        </header>
    )
}