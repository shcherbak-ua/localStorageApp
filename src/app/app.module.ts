import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
