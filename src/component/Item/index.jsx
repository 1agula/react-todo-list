import React, { Component } from "react";

export default class List extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleUpdate = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  handleDelete = (id) => {
    return () => {
      this.props.deleteTodo(id);
    };
  };
  render() {
    const { id, done, name } = this.props.todo;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ background: this.state.mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            checked={done}
            onChange={this.handleUpdate(id, done)}
            type="checkbox"
          />
          <span>{name}</span>
        </label>
        <button
          onClick={this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
