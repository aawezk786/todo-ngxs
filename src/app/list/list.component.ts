import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { DeleteTodo, GetTodos, SetSelectedTodo } from '../store/actions/todo.action';
import { TodoState } from '../store/states/todo.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Select(TodoState.getTodoList)
  todos:Observable<Todo[]>;

  constructor(private store : Store) { }

  ngOnInit(): void{
    this.store.dispatch(new GetTodos());
    console.warn(this.todos)
  }

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
}

editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
}

}
