import { Component, OnInit, Input } from '@angular/core';
import {ToDoItem} from '../to-do-item';
@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  @Input() userItem: ToDoItem; 

  constructor() { }

  ngOnInit() {
  }

}
