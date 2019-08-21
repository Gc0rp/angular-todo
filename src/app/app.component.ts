import { Component } from '@angular/core';
import {ToDoItem} from './to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  listOfToDos : ToDoItem[] = [
    new ToDoItem("Homework", true, new Date(2019, 9, 6))
  ];

  aTask(event){
    console.log(event);
    this.listOfToDos.push(event);
    console.log(this.listOfToDos);
  }
}
