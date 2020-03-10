import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatBoxComponent} from './chat-box/chat-box.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'chat-box', component: ChatBoxComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
