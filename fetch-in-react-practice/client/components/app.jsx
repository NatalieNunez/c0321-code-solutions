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
        this.state.todos.push(newTodo);
        this.setState({
          todos: this.state.todos
        });
      });
  }

  toggleCompleted(todoId) {
    let index = null;
    const newTodo = this.state.todos.map(todo => {
      if (todo.todoId === todoId) {
        index = this.state.todos.indexOf(todo);
        const isCompleted = todo.isCompleted;
        const obj = {
          isCompleted: !isCompleted,
          todoId: todoId,
          task: todo.task,
          createdAt: todo.createdAt
        };
        return obj;
      } else {
        return todo;
      }
    });
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo[index])
    })
      .then(res => res.json())
      .then(updatedTodo =>
        this.setState({
          todos: newTodo
        })
      );
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
