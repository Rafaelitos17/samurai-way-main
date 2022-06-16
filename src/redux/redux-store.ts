import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

export let store = createStore(reducers);
export type  AppStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store