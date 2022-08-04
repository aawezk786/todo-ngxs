import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Auth } from 'src/app/models/Auth';
import { AddAuth, GetAuth } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/states/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private formSubcription: Subscription = new Subscription();
  @Select(AuthState.getSelectedUser) auth: Observable<Auth>;
  constructor(private fb: FormBuilder, private store: Store,private router: Router,) {
    this.createForm();
  }

  ngOnInit(): void {
    // this.store.dispatch(new AddAuth({username:"aawez",password:"123"}))
  }


  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  submit(){
    this.store.dispatch(new AddAuth(this.loginForm.value));
  }

  clearForm() {
    this.loginForm.reset();
    // this.store.dispatch(new GetAuth(null));
  }
}
