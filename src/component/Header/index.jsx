import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleAddTodo = (event) => {
    const { target, keyCode } = event;
    const todoObj = { id: nanoid(), name: target.value, done: false };
    if (keyCode !== 13) return;
    if (target.value === "") return alert("输入不能为空");
    this.props.addTodo(todoObj);
    event.target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleAddTodo}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
