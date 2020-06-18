import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private data: UsersService ) { }

  ngOnInit() {
    const newUser: IUser = {name: 'Serhii', age: 18 };
    this.data.saveToLocalStorage(newUser);
  }

}
