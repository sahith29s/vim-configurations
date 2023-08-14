import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodosComponent } from './MyComponents/todos/todos.component';
// import { TodoItemComponent } from './MyComponenets/todo-item/todo-item.component';
// import { TodosItemComponent } from './MyComponents/todos-item/todos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    // TodosComponent,
    // TodoItemComponent,
    // TodosItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
