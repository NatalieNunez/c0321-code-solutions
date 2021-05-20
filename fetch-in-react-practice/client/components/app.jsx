import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({
          todos: todos
        });
      });
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(newTodo => {
        // console.log(newTodo);
        const newArray = this.state.todos.slice();
        newArray.push(newTodo);
        this.setState({
          todos: newArray
        });
      });
  }

  toggleCompleted(todoId) {
    let index = null;
    for (let i = 0; i < this.state.todos.length; i++) {
      const todo = this.state.todos[i];
      if (todo.todoId === todoId) {
        index = i;
      }
    }
    const isCompleted = this.state.todos[index].isCompleted;
    const update = {
      isCompleted: !isCompleted
    };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const newTodos = this.state.todos.slice();
        newTodos[index] = updatedTodo;
        this.setState({ todos: newTodos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
