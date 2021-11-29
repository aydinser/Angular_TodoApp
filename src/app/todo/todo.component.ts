import { Component, OnInit } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

   message = "";

  constructor() { }

 model = new Model();

//  addItem(txtItem:any){
//      console.log(txtItem.value)
//  }
addItem(value: string){
      this.message = value;
   }

  getName(){
    return this.model.name;
  }

  getItems(){
   return this.model.items;
 }

}
