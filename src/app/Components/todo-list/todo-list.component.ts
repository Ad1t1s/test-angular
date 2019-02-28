import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interfaces/Taskinterface';
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Task[];
  archived: Task[];

  newTodo = new Task();
  constructor(private DataService:DataService) { }

  ngOnInit() {
    [this.todos, this.archived] = this.DataService.testData().reduce((acc, next) => (acc[+next.archived].push(next), acc), [[], []]);
  }

  changeStatus(task) {
    task.done = !task.done;
  }

  toggleArhiveTask(task, idx: number) {
    let [from_, to_] = [this.archived, this.todos];
    if (!task.archived) {
      [from_, to_] = [to_, from_];
    }
    task.archived = !task.archived;
    to_.push(from_.splice(idx, 1).pop());
  }

  addTask() {
    this.todos.push(this.newTodo)
    this.newTodo = new Task();
  }

  remove(i) {
    this.todos.splice(i, 1);
  }

}
