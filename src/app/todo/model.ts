import { TodoItem } from "./todoitem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor(){
    this.name= "Aydin",
    this.items= [
      {description: "Frukost", action: "yes"},
      { description: "Träna", action: "yes"},
      {description: "Shopping", action: "no"},
      {description: "Läsa bok", action: "yes"},
      {description: "Frukost", action: "yes"},
      { description: "Träna", action: "yes"},
      {description: "Shopping", action: "no"},
      {description: "Läsa bok", action: "yes"}
    ];
  }
}

