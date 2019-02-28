import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interfaces/Taskinterface';
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Task[];

  constructor(private DataService:DataService) { }

  ngOnInit() {
    this.tasks = this.DataService.testData();
  }

}
