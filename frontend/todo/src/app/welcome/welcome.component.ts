import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMsgFromService:string;
  name:String;
  constructor(private service : WelcomeDataService) { }

  ngOnInit() {
    this.name = "rachana";
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error)
    );
    console.log("get welcome message")
  }

  getWelcomeMessageWithPath(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.name = "rachana";
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error)
    );
    console.log("get welcome message")
  }

  handleSuccessfulResponse(response){
    this.welcomeMsgFromService = response.message;
  }

  handleError(error){
    this.welcomeMsgFromService = error.error.message;
  }
}
