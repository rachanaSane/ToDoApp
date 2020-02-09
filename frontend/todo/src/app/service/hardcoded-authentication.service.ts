import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password){
    console.log("before:"+this.isUserLoggedIn())
    if(username ==="rachana" && password=== "123"){
      sessionStorage.setItem('authenticaterUser',username)
      console.log("item stored in sessionStorage.")
      return true;
    }
    console.log("after:"+this.isUserLoggedIn())
    return false;
  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticaterUser')
    //console.log("user:"+user)
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
