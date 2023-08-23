// create a makeStore function
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, legacy_createStore as createStore} from "redux";
import {reducer, RootState} from "./reducers";
import thunk, {ThunkDispatch} from "redux-thunk";

const makeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

// export an special dispatch for thunks
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>