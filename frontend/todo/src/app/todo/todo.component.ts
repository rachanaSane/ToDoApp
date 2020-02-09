import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number;
  todo:Todo;
  username:string;
  constructor(
    private todoservice: TodoDataService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'','',false,new Date());
    this.username = sessionStorage.getItem('authenticaterUser');

    if(this.id != -1){
    this.todoservice.retrieveTodo(this.username,this.id).subscribe(
      data=> {
        this.todo = data;
        this.todo.username = this.username;
      }
    )
    }
  }

  saveTodo(){
    this.todo.username = this.username;
    console.log("inside saveTodo");
    if(this.todo.id == -1){      
      this.todoservice.createTodo(this.username,this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }        
      )

    }else{
      this.todoservice.updateTodo(this.username,this.id,this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }        
      )
    }
  }

}
