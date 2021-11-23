import React from 'react';
import CustomersUI from '../CustomersUI/CustomersUI';
import { useDispatch, useSelector } from 'react-redux';
import { AddCashAction } from '../../actions/addCashAction';
import { GetCashAction } from '../../actions/getCashAction';
import {AddCustomerAction} from "../../actions/addCustomerAction";


export default function Counter() {
    const cash_output =  useSelector(state => state.CashReducer.cash);
    const customers_list =  useSelector(state => state.CustomerReducer.customers);
    const dispatch = useDispatch();
    // console.log(dispatch({type: "ADD_CUSTOMER", customers: AddCustomerAction(prompt())}))


    const AddnewCustomer = (name) => {
        const newCustomer = {
            name,
            id: Math.floor(Math.random()*100)
        }

        dispatch({type: "ADD_CUSTOMER", customers: newCustomer})
    }
    return (
        <div className="container">
                <div className="row">
                        <div className="col-6">
                            <h2>Cash balance: {cash_output}</h2>
                            <div className="btn-group">
                                <button onClick={() => dispatch(AddCashAction(Number(prompt())))} type="button" className="btn btn-outline-primary">Add Cash</button>
                                <button onClick={() => dispatch(GetCashAction(Number(prompt())))} type="button" className="btn btn-outline-primary">Remove Cash</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <h2>Select actions with customer(s)
                            </h2>
                            <div className="btn-group mb-3">
                                <button onClick={() => AddnewCustomer(prompt())} type="button" className="btn btn-outline-primary">Add new customer</button>
                                <button type="button" className="btn btn-outline-primary">Remove all customers</button>
                            </div>
                            <CustomersUI customers_list={customers_list} />
                        </div>
                </div>
        </div>
    )
}
