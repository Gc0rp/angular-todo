import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {ToDoItem} from '../to-do-item';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 @Output() pushTask: EventEmitter<ToDoItem> = new EventEmitter();

  today: Date = new Date();
  submitTodo(task: string){
    const tTask = {
      title: task, 
      completed: false,
      date: this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate()
    }
     this.pushTask.emit(tTask);  
  }



  constructor() { }

  ngOnInit() {
  }

}
