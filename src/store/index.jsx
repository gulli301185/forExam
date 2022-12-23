import { applyMiddleware } from "redux";
import { datasReducer } from "./dataReducer";
import thunk from "redux-thunk";
import { createStore } from "redux";


export const store=createStore(datasReducer, applyMiddleware(thunk))