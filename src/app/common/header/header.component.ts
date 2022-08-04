import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/Auth';
import { AuthState } from 'src/app/store/states/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Select(AuthState.getSelectedUser) auth: Observable<Auth>;
  constructor() { }


  ngOnInit(): void {
    console.warn(this.auth)
  }

}
