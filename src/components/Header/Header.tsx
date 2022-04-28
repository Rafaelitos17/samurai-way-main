import React from "react";
import s from './Header.module.css';
export const Header = ()=> {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Intel_logo_%282006-2020%29.jpg"
                alt="logo"/>
        </header>
    )
}
