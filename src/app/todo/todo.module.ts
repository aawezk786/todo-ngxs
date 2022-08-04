import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { HomeComponent } from './home/home.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from '../store/states/todo.state';
import { TodoRoutingModule } from './todo.routing';
import { HeaderComponent } from '../common/header/header.component';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    NgxsModule.forFeature([TodoState])
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }
