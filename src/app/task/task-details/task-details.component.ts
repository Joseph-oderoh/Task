import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { List } from '../../list' //?imported from list.ts
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input()
  list!: List;
@Output() isComplete = new EventEmitter<boolean>();
// listComplete(complete: boolean){
//   this.isComplete.emit(complete)
// }
listDelete(complete: boolean){
  this.isComplete.emit(complete)
}
  constructor() { }

  ngOnInit(): void {
  }

}
