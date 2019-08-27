import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToDoItem} from '../to-do-item';
@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  @Input() userItem: ToDoItem; 
  @Output() deleteItem: EventEmitter<void> = new EventEmitter<void>();
  removeItem(item: ToDoItem){
    
    this.deleteItem.emit();
  }

  itemCompleted(){

  }

  constructor() { }

  ngOnInit() {
  }

}
