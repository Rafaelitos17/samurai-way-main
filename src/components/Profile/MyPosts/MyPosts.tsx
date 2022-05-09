import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = (props:any) => {
    debugger
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}