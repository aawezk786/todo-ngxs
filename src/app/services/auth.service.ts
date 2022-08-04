import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  cred = {
    username: "aawezk456",
    password: "123"
  }

  postLogin(username:string, password:string) {
    return new Promise((resolve, reject) => {
      if (username == this.cred.username && password == this.cred.password) {
        resolve("")
      } else {
        reject(
          new Error()
        )
      }
    })
  }
}
