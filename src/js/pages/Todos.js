import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions"

export default class Todos extends React.Component {
  constructor() {
    super();
    this.setTodos = this.setTodos.bind(this)
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentDidMount() {
    TodoStore.on('change', this.setTodos)
    console.log("count", TodoStore.listenerCount("change"))
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.setTodos)
  }

  setTodos() {
    this.setState({
      todos: TodoStore.getAll()
    })
  }

  reloadTodos() {
    TodoActions.reloadTodos()
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

