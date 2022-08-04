import { Auth } from "src/app/models/Auth";
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { AuthService } from "src/app/services/auth.service";
import { AddAuth } from "../actions/auth.action";
import { Injectable, NgZone } from "@angular/core";
import { NGXS_EXECUTION_STRATEGY } from "@ngxs/store/src/execution/symbols";
import { Router } from "@angular/router";

export class AuthStateModel {
  auth: Auth;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    auth: {
      message: null,
      error: false,
      username: null,
      password: null
    }
  }
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService ,private router:Router,private ngzone:NgZone) {

  }

  @Selector()
  static getSelectedUser(state: AuthStateModel) {
    return state.auth;
  }

  @Action(AddAuth)
  async addAuth({ getState, setState, patchState }: StateContext<AuthStateModel>, { payload }: AddAuth) {
    try {
    // const state = getState();
    await this.authService.postLogin(payload.username, payload.password);
      console.log(payload)
    patchState({
      auth: {
        ...payload,
        message : "SUCCESS",
        error : false
      }
    })
    this.ngzone.run(() => {
      this.router.navigate([`/${"todo"}`]);
    })

    } catch (error) {
      console.error(error , "ERROR")
      patchState({
        auth: {
          ...payload,
          message : "WRONG CREDENTIALS",
          error : true
        }
      })
    }
  }
}
