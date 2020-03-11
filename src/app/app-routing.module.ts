import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatBoxComponent} from './chat-box/chat-box.component';
import {LoginComponent} from './login/login.component';
import {MessageGroupComponent} from './chat-box/message-group/message-group.component';
import {MessageNewGroupComponent} from './chat-box/message-new-group/message-new-group.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'chat-box/:id', component: ChatBoxComponent,
    children: [
      {path: 'new-group', component: MessageNewGroupComponent},
      {path: '', component: MessageGroupComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
