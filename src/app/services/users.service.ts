import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { IUser } from '../interfaces/iuser';

const STORAGE_KEY = 'local_users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public saveToLocalStorage(user: IUser): void {
    const tmpUsersList = this.storage.get(STORAGE_KEY) || [];
    tmpUsersList.push(user);
    this.storage.set(STORAGE_KEY, tmpUsersList);
    console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');
  }
  public getFromLocalStorage(): [] {
    const currentTodoList = this.storage.get(STORAGE_KEY) || [];
    return currentTodoList;
  }
  public clearLocalStorage() {
    const currentTodoList = this.storage.clear();
    console.log("LocalStorage is cleared");
  }
}


