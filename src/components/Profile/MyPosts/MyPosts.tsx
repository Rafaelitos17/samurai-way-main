import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {PostType, updateNewPostText} from "../../../redux/state";

type MyPosts = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const MyPosts = (props: MyPosts) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if(newPostElement.current) {
            props.addPost()
        }
    }

    let changePost =()=> {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            updateNewPostText(text)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea
                    onChange={changePost}
                    value={props.newPostText}
                    ref={newPostElement}
                ></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}