import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users = [];
  constructor(private data: UsersService) { }

  ngOnInit() {
    this.Users = this.data.getFromLocalStorage();
  }
  clearStorage() {
    this.data.clearLocalStorage();
    this.getUsers();
  }
  getUsers() {
    this.Users = this.data.getFromLocalStorage();
  }
}
