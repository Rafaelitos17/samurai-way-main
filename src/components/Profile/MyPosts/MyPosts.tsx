import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            MyPosts
            <Post message={'Hello1'} likesCount="3"/>
            <Post message={'Hello2'} likesCount="6"/>
        </div>
    )
}