import { makeAutoObservable } from 'mobx';

class Todo {
  text = '';
  completed = false;

  constructor(text) {
    this.text = text;
    makeAutoObservable(this);
  }

  markAsCompleted() {
    this.completed = true;
  }
}

export default Todo;
