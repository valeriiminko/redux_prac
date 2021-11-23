import { combineReducers } from "redux";
import { CashReducer } from "./CashReducer";
import { CustomerReducer } from "./CustomerReducer";

export const RootReducer = combineReducers({
    CashReducer,
    CustomerReducer
})