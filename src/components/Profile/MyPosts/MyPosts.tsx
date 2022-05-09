import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = (props:PostDataType) => {

    // type PostsDataType = Array<PostDataType>
    // type PostDataType = {
    //     id: number,
    //     message: string
    //     likesCount: string
    // }
    //
    // let posts: PostsDataType = [
    //     {id: 1, message: 'hello', likesCount: '40'},
    //     {id: 1, message: 'bye bye', likesCount: '24'}
    // ]

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