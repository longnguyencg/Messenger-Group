import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { MessageGroupComponent } from './chat-box/message-group/message-group.component';
import { MessageNewGroupComponent } from './chat-box/message-new-group/message-new-group.component';
import { SearchComponent } from './chat-box/search/search.component';
import { ChatTitleComponent } from './chat-box/chat-title/chat-title.component';
import { InputChatFormComponent } from './chat-box/input-chat-form/input-chat-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    RegisterComponent,
    LoginComponent,
    ChatBoxComponent,
    MessageGroupComponent,
    MessageNewGroupComponent,
    SearchComponent,
    ChatTitleComponent,
    InputChatFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
