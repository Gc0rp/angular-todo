import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {ToDoItem} from '../to-do-item';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 @Output() pushTask: EventEmitter<ToDoItem> = new EventEmitter();

  submitTodo(task: string){
    const tTask = {
      title: task, 
      completed: false,
      date: new Date(2019, 9, 9)
    }
     this.pushTask.emit(tTask);  
  }



  constructor() { }

  ngOnInit() {
  }

}
