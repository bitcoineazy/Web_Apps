import React from "react";

import AgeField from "./AgeField";
import NameField from "./NameField";

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.NameField = React.createRef()
        this.AgeField = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e){
        e.preventDefault();

        if (
            this.NameField.current.state.nameValid &&
            this.AgeField.current.state.ageValid
        ) {
        alert("Имя: " + this.NameField.current.state.name + " Возраст: " + this.AgeField.current.state.age);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <NameField name="" ref={this.NameField}/>
                <AgeField age="" ref={this.AgeField}/>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}
