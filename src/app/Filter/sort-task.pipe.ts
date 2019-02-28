import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Interfaces/Taskinterface';

@Pipe({
  name: 'sortTask'
})
export class SortTaskPipe implements PipeTransform {

  transform(tasks: Task[], isArchived: boolean): Task[] {
    return tasks.filter(task => isArchived ? task.archived : !task.archived);
  }

}
