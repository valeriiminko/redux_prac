import { ADD_CUSTOMER } from "../tools/constants";

export const AddCustomerAction = (customer) => {
    const newCustomer = {
        customer,
        id:Math.random()*100,
        type: ADD_CUSTOMER
    }
    return newCustomer;
}