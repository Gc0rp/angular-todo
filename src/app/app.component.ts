import { Component } from '@angular/core';
import {ToDoItem} from './to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  listOfToDos : ToDoItem[] = [];

  constructor(){
    
   console.log(localStorage);
   this.listOfToDos = JSON.parse(localStorage.getItem('myToDos'));
  }
  
  aTask(event){
    console.log(event);
    this.listOfToDos.push(event);
    console.log(this.listOfToDos);
    localStorage.setItem('myToDos', JSON.stringify(this.listOfToDos));
    }

  removeItem(item: ToDoItem){
    this.listOfToDos.splice(this.listOfToDos.indexOf(item), 1);
  }
}
