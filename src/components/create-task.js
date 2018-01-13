/**
 * Created by Vladislav on 08.01.2018.
 */
import React from 'react';
import _ from 'lodash';

export default class CreateTask extends React.Component{

    constructor(props) {
        super(props);
        this.renderError = this.renderError.bind(this);
        this.validateNewTask = this.validateNewTask.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.state = {
            errors : null
        };
    }

    handleCreate(e) {
        e.preventDefault();
        var task  = this._value.value;
        var validateTask = this.validateNewTask(task);
        if( validateTask ) {
            this.setState( { errors: validateTask});
        } else {
            this.setState({errors: null});
            this.props.onCreateTask(task);
        }
        this._value.value = '';
    }

    renderError(){
        if(!this.state.errors) {
            console.log("Here one");
            return null;
        }
        console.log("Here two");
        return <div style={{color: 'red'}}>{this.state.errors}</div>;
    }

    validateNewTask(taskValue) {
        if(taskValue == '') {
            return "Sorry empty task";
        }
        if( _.find( this.props.todoList , item => item.task == taskValue)) {
            return "Sorry, already exist task";
        }
        return null;
    }


    render() {
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text"
                       placeholder="What do I need to do ?"
                       ref={input => this._value = input}/>
                <button>Create</button>
                {this.renderError()}
            </form>
        );
    }
}
