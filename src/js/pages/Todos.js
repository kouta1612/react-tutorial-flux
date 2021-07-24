import React from "react";

import Todo from "../components/Todo";
import todoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoStore.getAll()
    };
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

