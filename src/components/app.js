/**
 * Created by Vladislav on 08.01.2018.
 */
import React from 'react';
import TodoList from './todo-list';
import CreateTask from './create-task';
import _ from 'lodash';
import Todo from './todo.json';

const todo = Todo;


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: todo
        }
        this.onCreateTask = this.onCreateTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    onCreateTask( value) {
        this.state.todo.push({
            task : value,
            isCompleted: false
        });
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

    deleteTask(taskDelete) {
        _.remove(this.state.todo, item =>
            item.task === taskDelete);
        this.setState({todo : this.state.todo});
    }

    render() {
        return (
            <div>
                <h1>React TODO list</h1>
                <CreateTask onCreateTask={this.onCreateTask} todoList={this.state.todo} />
                <TodoList todo={this.state.todo}
                          toggleTask={this.toggleTask}
                          saveTask = {this.saveTask}
                          deleteTask={this.deleteTask}/>
            </div>
        );
    }
}