import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSelect(e) {
    this.props.updateShowing(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewTodo(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={this.handleSelect}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
