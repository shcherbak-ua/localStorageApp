import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';


const routes: Routes = [
  {
    path: 'demo',
    component: UserListComponent
  },
  {
    path: 'newuser',
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
