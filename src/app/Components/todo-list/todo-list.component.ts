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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    [this.todos, this.archived] = this.dataService.testData()
                                  .reduce((acc, next) => (acc[+next.archived]
                                  .push(next), acc), [[], []]);
  }

  changeStatus(task: Task) {
    task.done = !task.done;
  }

  toggleArhiveTask(task: Task, idx: number) {
    let [from, to]: Task[][] = [this.archived, this.todos];
    if (!task.archived) {
      [from, to] = [to, from];
    }
    task.archived = !task.archived;
    to.push(from.splice(idx, 1).pop());
  }

  addTask() {
    this.todos.push(this.newTodo);
    this.newTodo = new Task();
  }

  remove(i: number) {
    this.todos.splice(i, 1);
  }

}
