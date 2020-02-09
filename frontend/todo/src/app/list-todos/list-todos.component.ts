import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public username : string,
    public description : string,
    public done : boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];
  message : string;
  username : string;
 /* todos =[
    new Todo(1, 'going to spain',false, new Date()),
    new Todo(2, 'going to spain',false, new Date()),
    new Todo(3, 'going to spain',false, new Date()),
    new Todo(4, 'going to spain',false, new Date())
   
  ]*/

  constructor(
    private todoService : TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('authenticaterUser');
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos(this.username).subscribe(
      data => {
        console.log(data);
        this.todos = data

        console.log("Data inside Todos..");
        for (let entry of this.todos ){
          console.log(entry);
        }
      }
    )
  }

  deleteTodo(id){
    console.log("inside delete:"+id)
    this.todoService.deleteTodo(this.username,id).subscribe(
      data => {
        console.log("successfully deleted by spring:"+data)
        this.message ="detele successful"
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log("inside update todo")
    this.router.navigate(['todos',id]);
  }

  addToDo(){
    this.router.navigate(['todos',-1]);
  }

}
