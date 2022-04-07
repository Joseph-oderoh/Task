import { Component, OnInit } from '@angular/core';
import { List } from '../list' //?imported from list.ts
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
title = "Tasks"
  //!display an array header represents the property header.componet  List is for the imported class
    lists: List [] = [
      new List(1,'Treat myself', 'To reward my on my cacomplished goals', new Date(2022,3,14)),
      new List(2,'Set strategic goals to facilitae my learning experience','Help me in managing my time',new Date(2022,3,16))
    ];

    toggleDetails(index:  number){
      this.lists[index].showAbout = !this.lists[index].showAbout;
    }
    deleteList(isComplete: any, index: number){
      // if (isComplete) {
      //   this.lists.splice(index,1);

        if (isComplete) {
          let toDelete = confirm(`Are you sure you want to delete ${this.lists[index].name}?`)
          if (toDelete){
            this.lists.splice(index,1)
          }
        }
      // }
    }

    addNewList(list: any){
      let listLength = this.lists.length;
      list.id = listLength+1;
      list.completeDate = new Date(list.completeDate)
      this.lists.push(list)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
