import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
