import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { RegisterComponent } from './register/register.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { LoginComponent } from './login/login.component';
import { SearchUserComponent } from './chat-box/search-user/search-user.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ListUsersComponent } from './chat-box/list-users/list-users.component';
import { MessageGroupComponent } from './chat-box/message-group/message-group.component';
import { MessageNewGroupComponent } from './chat-box/message-new-group/message-new-group.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    RegisterComponent,
    ChatBoxComponent,
    LoginComponent,
    SearchUserComponent,
    ListUsersComponent,
    MessageGroupComponent,
    MessageNewGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
