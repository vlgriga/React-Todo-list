/**
 * Created by Vladislav on 08.01.2018.
 */
import React from 'react';
import TodoList from './todo-list';
import CreateTask from './create-task';
import _ from 'lodash';

const todo = [
    {
        task: 'Make React tutorial',
        isCompleted: true
    },
    {
        task: 'Eat dinner',
        isCompleted: false
    }
];


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: todo
        }
        this.onCreateTask = this.onCreateTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    onCreateTask( value) {
        this.state.todo.push({
            task : value,
            isCompleted: false
        })
        this.setState({todo : this.state.todo});
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todo, item =>
            item.task === task.task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState( {todo : this.state.todo});
    }

    saveTask(prevTask , newTask) {
        const foundTodo = _.find(this.state.todo , item =>
            item.task === prevTask);
        foundTodo.task = newTask;
        this.setState({todo : this.state.todo});
    }

    render() {
        return (
            <div>
                <h1>React TODO list</h1>
                <CreateTask onCreateTask={this.onCreateTask} />
                <TodoList todo={this.state.todo}
                          toggleTask={this.toggleTask}
                          saveTask = {this.saveTask}/>
            </div>
        );
    }
}