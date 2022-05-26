import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilesType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText:string) => void
}

export const Profile = (props: ProfilesType) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>
    )
}
