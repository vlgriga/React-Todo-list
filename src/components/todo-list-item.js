/**
 * Created by Vladislav on 08.01.2018.
 */
import React from 'react';

export default class TodoListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.onEditClick = this.onEditClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }


    renderTaskSection() {
        const task = this.props.task;
        const taskStyle = {
            color: task.isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if(this.state.isEditing) {
            return(
                <td>
                    <input type="text"
                           defaultValue={task.task}
                           ref={input => this._newTask = input}/>
                </td>
            );
        }
        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this,task)}>
                {task.task}
            </td>);
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return (
                <td>
                    <button
                        onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button>Delete</button>
            </td>
        )

    }
    onEditClick() {
        this.setState({isEditing: true});
    }
    onCancelClick() {
        this.setState({isEditing: false});
    }
    onSaveClick(e) {
        e.preventDefault();
        const prevTask = this.props.task.task;
        const newTask = this._newTask.value;
        console.log(prevTask + " -> " + newTask);
        this.props.saveTask(prevTask, newTask);
        this.setState({isEditing: false});

    }


    render() {
        return(
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
}
