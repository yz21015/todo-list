import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React from "react";
import { uuid } from "uuidv4";

class App extends React.Component {
  constructor(props) {
    super(props);
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    this.state = {
      todos: storedTodos ? storedTodos : [],
      showing: "all",
      filteredTodos: storedTodos ? this.sortTodos(storedTodos) : [],
    };
  }

  componentDidUpdate(_, prevState) {
    console.log("update");
    this.setLocalStorage();
    if (prevState.filteredTodos !== this.state.filteredTodos) return;
    this.filterTodos();
  }

  createNewTodo = (todo) => {
    const newTodo = {
      id: uuid(),
      value: todo,
      completed: false,
    };
    this.setState({ todos: this.state.todos.concat(newTodo) });
  };

  removeTodo = (id) => {
    const newTodo = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodo });
  };

  completedTodo = (id) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    this.setState({ todos: newTodo });
  };

  filterTodos = (showing = this.state.showing) => {
    console.log("filter called");
    let filteredTodos;
    if (showing === "completed") {
      filteredTodos = this.state.todos.filter((todo) => todo.completed);
    } else if (showing === "uncompleted") {
      filteredTodos = this.state.todos.filter((todo) => !todo.completed);
    } else {
      filteredTodos = this.sortTodos(this.state.todos);
    }
    this.setState({ filteredTodos: filteredTodos });
  };

  sortTodos = (todos) => {
    return todos.slice().sort((a, b) => +a.completed - +b.completed);
  };

  updateShowing = (newShowing) => {
    this.setState({ showing: newShowing });
  };

  setLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  render() {
    console.log(this.state.todos);
    console.log(this.state.filteredTodos);
    return (
      <div className="App">
        <header>
          <h1>React todo list</h1>
        </header>
        <Form
          createNewTodo={this.createNewTodo}
          updateShowing={this.updateShowing}
        />
        <TodoList
          todos={this.state.filteredTodos}
          removeTodo={this.removeTodo}
          completedTodo={this.completedTodo}
        />
      </div>
    );
  }
}

export default App;
