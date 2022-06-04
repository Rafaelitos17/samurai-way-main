import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";

type ProfilesType = {
    store: StoreType
}

export const Profile = (props: ProfilesType) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts
                    store={props.store}
                    posts={props.store._state.profilePage.posts}
                    newPostText={props.store._state.profilePage.newPostText}
                />
            </div>
        </div>
    )
}
