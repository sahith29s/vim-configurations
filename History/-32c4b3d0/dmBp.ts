import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

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
