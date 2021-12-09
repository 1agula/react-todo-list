import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "test task", done: false },
      { id: "002", name: "Seeeeeeeeeex", done: false },
    ],
  };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, done: done };
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return id !== todo.id;
    });
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done };
    });
    this.setState({ todos: newTodos });
  };
  clearAllTodo = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          ></List>
          <Footer
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            clearAllTodo={this.clearAllTodo}
          ></Footer>
        </div>
      </div>
    );
  }
}
