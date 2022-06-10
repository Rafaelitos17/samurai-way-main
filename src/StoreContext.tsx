import React from 'react'
import {StoreType} from "./redux/store";
import {AppStoreType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as StoreType);
export type ProviderType = {
    store: any
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
