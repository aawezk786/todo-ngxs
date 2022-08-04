import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/Auth';
import { AuthState } from 'src/app/store/states/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @Select(AuthState.getSelectedUser) auth: Observable<Auth>;
  User:any
  constructor() { }

  ngOnInit(): void {
    // this.auth.subscribe(res=>{
    //   this.User = res
    // })
    // console.warn(this.auth)
  }

}
