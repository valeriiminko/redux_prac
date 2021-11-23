import { GET_CASH } from "../tools/constants";

export const GetCashAction = (cash) => {
    return{
        type: GET_CASH,
        cash
    }
}