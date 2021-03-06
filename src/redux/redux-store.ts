import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
})

export let store = createStore(reducers);
// @ts-ignore
window.store = store