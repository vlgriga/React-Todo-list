/**
 * Created by Vladislav on 08.01.2018.
 */
import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';


export default class TodoList extends React.Component{

    constructor(props) {
        super(props);
    }

    renderItems() {
        return _.map(this.props.todo , (index,key) =>
            <TodoListItem  key={key} task={index}
                           toggleTask={this.props.toggleTask}
                           saveTask={this.props.saveTask}/>);
    }

    render() {
        return (
            <table>
                <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>

        );
    }
}