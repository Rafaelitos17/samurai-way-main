import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            MyPosts
            <button>HEllo</button>
            <input type="placeholder"/>
            <Post />
        </div>
    )
}
