import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveCustomerAction } from '../../actions/removeCustomerAction';

export default function CustomersUI({customers_list}) {
    const dispatch = useDispatch();
    return (
        <div>
            {customers_list.length > 0 ? (
                <ul className="list-group">
                    {customers_list.map(customer => {
                        return <li onClick={() => dispatch(RemoveCustomerAction(customer.id))} className="list-group-item" key={customer.id}>{customer.name}</li>
                    })}
                </ul>
            )
        :null}
        </div>
    )   
}
