import {combineReducers, createStore} from 'redux'
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";
import {setCounterReducer} from "./setCounter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    setCounter: setCounterReducer
})


export const store = createStore(rootReducer, loadState())
store.subscribe(() =>{
    saveState({
        counter: store.getState().counter,
        setCounter: store.getState().setCounter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store