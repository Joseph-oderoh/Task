import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { List } from '../list';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
newList = new  List (0,"","",new Date());
@Output()
addList = new EventEmitter <List>();
submitList(){
  this.addList.emit(this.newList);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
