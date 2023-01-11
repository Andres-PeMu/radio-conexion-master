import { Injectable } from '@angular/core';
import User from 'src/app/interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageUserService {

  constructor() { }

  getItem(){
    return JSON.parse(localStorage.getItem('USER'));
  }

  postItem( user ){
    localStorage.setItem('USER', JSON.stringify(user));
  }

}
