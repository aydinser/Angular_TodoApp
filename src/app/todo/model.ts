import { TodoItem } from "./todoitem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor(){
    this.name= "Aydin",
    this.items= [
      // {description: "Frukost", action: true},
    ];
  }
}

