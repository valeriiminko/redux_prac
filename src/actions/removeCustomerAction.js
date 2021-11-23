import { REMOVE_CUSTOMER } from "../tools/constants";

export const RemoveCustomerAction = (customer) => {
    return{
        type: REMOVE_CUSTOMER,
        customer
    }
}