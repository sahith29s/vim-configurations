import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent {
  todos: Todo[]
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "this is me inside the title",
        desc: "description",
        active: true
      },
      {
        sno: 1,
        title: "this is me inside the title",
        desc: "description",
        active: true
      },
      {
        sno: 1,
        title: "this is me inside the title",
        desc: "description",
        active: true
      },
    ]
  }

}
