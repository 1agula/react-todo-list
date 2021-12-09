import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  render() {
    const totalTodo = this.props.todos.length;
    const checkedTodo = this.props.todos.filter((todo) => {
      return todo.done;
    }).length;
    return (
      <div className="todo-footer">
        <label>
          <input
            checked={totalTodo === checkedTodo && totalTodo}
            onChange={this.handleCheckAll}
            type="checkbox"
          />
        </label>
        <span>
          <span>已完成{checkedTodo}</span> / 全部{totalTodo}
        </span>
        <button onClick={this.props.clearAllTodo} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
