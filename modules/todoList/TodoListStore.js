import { makeAutoObservable } from 'mobx';
import Todo from '../todo/TodoStore';

class TodoListStore {
  todoList = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text) {
    const newItem = new Todo(text);
    this.todoList.push(newItem);
  }

  markAsCompleted(todo) {
    todo.markAsCompleted();
    this.todoList = this.todoList.filter((t) => t !== todo);
    this.todoList.push(todo);
  }

  deleteTodo(todo) {
    this.todoList = this.todoList.filter((t) => t !== todo);
  }
}

const todoListStore = new TodoListStore();
export default todoListStore;
