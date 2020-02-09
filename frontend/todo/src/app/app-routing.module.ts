import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { ListTodosComponent } from 'src/app/list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'',component : LoginComponent},
  {path:'login',component : LoginComponent},
  {path:'welcome',component : WelcomeComponent, canActivate :[RouteGuardService]}, 
  {path:'todos',component : ListTodosComponent, canActivate :[RouteGuardService]},
  {path:'logout',component : LogoutComponent, canActivate :[RouteGuardService]},
  {path:'todos/:id',component : TodoComponent, canActivate :[RouteGuardService]},
  {path:'**',component : ErrorComponent, canActivate :[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
