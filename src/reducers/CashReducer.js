import { ADD_CASH, GET_CASH } from "../tools/constants"


const initialState = {
     cash: 0
}

export const CashReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CASH: return {...state, cash: state.cash + action.cash}
        case GET_CASH:return {...state, cash: state.cash - action.cash}

        default: return state
    }
}