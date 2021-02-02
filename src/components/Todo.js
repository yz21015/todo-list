import React from "react";

class Todo extends React.Component {
  handleRemove = () => {
    this.props.removeTodo(this.props.todo.id);
  };

  handleComplete = () => {
    this.props.completedTodo(this.props.todo.id);
  };

  render() {
    return (
      <div className="todo">
        <li
          className={`todo-item ${
            this.props.todo.completed ? "completed" : ""
          }`}
        >
          {this.props.todo.value}
        </li>
        <button className="complete-btn" onClick={this.handleComplete}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={this.handleRemove}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Todo;
