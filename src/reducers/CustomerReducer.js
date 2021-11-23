import { ADD_CUSTOMER, REMOVE_ALLCUSTOMERS, REMOVE_CUSTOMER } from "../tools/constants"

const initialState = {
    customers: []
}

export const CustomerReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CUSTOMER: return {...state, customers: [...state.customers, action.customers]}
        case REMOVE_CUSTOMER: return{...state, customers: state.customers.filter(customer => {
            return customer.id !== action.customer;
        })}
        case REMOVE_ALLCUSTOMERS:

        default: return state
    }
}