import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    export type PostsDataType = Array<PostDataType>
    export type PostDataType = {
        id: number,
        message: string
        likesCount: string
    }

    let posts: PostsDataType = [
        {id: 1, message: 'hello', likesCount: '40'},
        {id: 1, message: 'bye bye', likesCount: '24'}
    ]
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}/>
            </div>
        </div>
    )
}
