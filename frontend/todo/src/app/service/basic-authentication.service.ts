import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http : HttpClient
  ) { }
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

  executeJWTAuthenticationService(username, password){
    console.log("inside executeBasicAuthenticationService");
 
   
    return this.http.post<any>(`http://localhost:8080/authenticate`,{
      username,
      password
    }).pipe(
      map (
        data=>{
          sessionStorage.setItem('authenticaterUser',username);
          sessionStorage.setItem('token',`Bearer ${data.token}`);
          return data;
        }
      )
    );
}

  executeBasicAuthenticationService(username, password){
    console.log("inside executeBasicAuthenticationService");
 
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
         Authorization: basicAuthHeaderString
       })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {headers:headers}).pipe(
      map (
        data=>{
          sessionStorage.setItem('authenticaterUser',username);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
}

getAuthenticatedUser(){
  return sessionStorage.getItem('authenticaterUser');
   
}

getAuthenticatedToken(){
  if(this.getAuthenticatedUser())
  return sessionStorage.getItem('token');
  
}

 createBasicAuthenticationHttpHeader() {
   let username = 'rachana'
     let password = 'password'
     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
     return basicAuthHeaderString;
   }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticaterUser')
    //console.log("user:"+user)
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }
}


export class AuthenticationBean{

  constructor(
    public message : string
  ){}
}