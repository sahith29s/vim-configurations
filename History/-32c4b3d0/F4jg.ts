import { Component } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];

  constructor(){
    this.todos = [

      {
        sno : 1,
        title : "this is title",
        desc : "description",
        active : true
      },

      {
        sno : 2,
        title : "this is title",
        desc : "description",
        active : true
      },

      {
        sno : 3,
        title : "this is title",
        desc : "description",
        active : true
      },

    ]
  }

}
