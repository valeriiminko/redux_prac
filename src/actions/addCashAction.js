import { ADD_CASH } from "../tools/constants";

export const AddCashAction = (cash) => {
    return{
        type: ADD_CASH,
        cash
    }
}