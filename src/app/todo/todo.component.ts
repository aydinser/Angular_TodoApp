import { Component, OnInit } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

   displayAll: boolean = false;

  constructor() { }

 model = new Model();

   addItem(value: string){
     if(value === "")
      alert("tom text kan inte läggas på listan")
      else{
        this.model.items.push({description: value,action: false});
      }
   }

  getName(){
    return this.model.name;
  }


  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
   return this.model.items.filter(item => item.action === false);
 }

displayCount(){
  return this.model.items.filter(i => i.action).length;
}

}
