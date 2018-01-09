/**
 * Created by Vladislav on 08.01.2018.
 */
import React from 'react';

export default class CreateTask extends React.Component{

    handleCreate(e) {
        e.preventDefault();
        console.log( this._value.value);
        if( this._value.value !== '' )
            this.props.onCreateTask(this._value.value);
        this._value.value = '';
    }

    render() {
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text"
                       placeholder="What do I need to do ?"
                       ref={input => this._value = input}/>
                <button>Create</button>
            </form>
        );
    }
}
