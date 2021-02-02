import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            removeTodo={props.removeTodo}
            completedTodo={props.completedTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
