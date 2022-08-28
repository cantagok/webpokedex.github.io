import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case "Change_Page": {
            return {
                page: action.payload,
                offset: (50* (action.payload-1))
            }
        }
    }
}

const initialState = {
    page: 1,
    offset: 0,
    count: 1
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
        value= {{
            page: state.page,
            offset: state.offset,
            count: state.count,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}