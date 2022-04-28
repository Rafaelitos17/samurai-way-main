import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" alt="Avatar"/>
            post1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}
