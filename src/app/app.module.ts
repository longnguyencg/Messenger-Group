import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { LoginComponent } from './login/login.component';
import { SearchUserComponent } from './chat-box/search-user/search-user.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ListUsersComponent } from './chat-box/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    LoginComponent,
    SearchUserComponent,
    ListUsersComponent,
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
