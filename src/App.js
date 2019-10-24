import React from 'react'

import './App.css';
import TableComponent from "./TableComponent";
import {FormComponent} from "./FormComponent";
import useForm from "react-hook-form";
import {useSelector, useDispatch} from "react-redux";
import {addTableData} from "./action";
import {CREATE_TABLE_DATA} from "./constant";

const App = () => {
    //getting data from reduxstore
    const selector = useSelector(state => state.tableData);

    const tableData = selector.map(select => select.payload);
    //dispatch function
    const dispatch = useDispatch();
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        const {first, last, birthday, age, hobby} = data;
        const newObject = {firstname:first,lastname:last,birthday:birthday, age:age, hobby:hobby};
        dispatch({
            type:CREATE_TABLE_DATA,
            payload:addTableData(newObject)
        });
        // console.log(newObject);
        // if (newObject.firstname !== "" && newObject.lastname !== "" && newObject.age !== "" && newObject.birthday !== "" && newObject.hobby !== ""){
        //     duplicatedList.push(newObject);
        //     this.setState({row:duplicatedList});
        // }
    };

        return (
            <div className="App">
                <h2>Enye React Coding Challenge</h2>
                <FormComponent onSubmit = {handleSubmit(onSubmit)} register={register} />
                <TableComponent rows = {tableData} />
            </div>
        );
};
export default App


