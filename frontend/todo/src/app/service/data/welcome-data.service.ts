import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:String){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
        console.log("inside hello world bean");
        return this.http.get<HelloWorldBean>("${API_URL}/hello-world");
  }

  executeHelloWorldBeanServiceWithPath(name){
    console.log("inside hello world bean");
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
         Authorization: basicAuthHeaderString
       })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
    {headers:headers});
}

 createBasicAuthenticationHttpHeader() {
   let username = 'rachana'
     let password = 'password'
     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
     return basicAuthHeaderString;
   }
}
