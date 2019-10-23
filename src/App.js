import React, { Component } from 'react'

import './App.css';
import TableComponent from "./TableComponent";
import {rows} from "./TableMockData";

class App extends Component{

    constructor(props) {
        super(props);
        this.formValues = this.formValues.bind(this);
        this.state = {
            row:rows
        }
    };


asssssss;

    formValues = values => {
        values.preventDefault();
        const formData = {};

        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }

        const {first, last, birthday, age, hobby} = formData;
        const duplicatedList = [...this.state.row];
        const newObject = {firstname:first,lastname:last,birthday:birthday, age:age, hobby:hobby};
        console.log(newObject);
        if (newObject.firstname !== "" && newObject.lastname !== "" && newObject.age !== "" && newObject.birthday !== "" && newObject.hobby !== ""){
            duplicatedList.push(newObject);
            this.setState({row:duplicatedList});
        }


    };

    render() {

        return (
            <div className="App">
                <h2>Enye React Coding Challenge</h2>
                <form onSubmit={this.formValues}>
                    <input type="text" placeholder="FIRST NAME" name="first" ref="first"/>
                    <input type="text" placeholder="LAST NAME" name="last" ref="last"/>
                    <input type="date" placeholder="BIRTHDAY" name="birthday" ref="birthday"/>
                    <input type="text" placeholder="AGE" name="age" ref="age"/>
                    <input type="text" placeholder="HOBBY" name="hobby" ref="hobby"/>
                    <input type="submit" value="Submit" className="button"/>
                </form>
                <TableComponent rows = {this.state.row} />
            </div>
        );
    }


}

export default App;
