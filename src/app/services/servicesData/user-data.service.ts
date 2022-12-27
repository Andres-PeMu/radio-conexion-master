import { Injectable } from '@angular/core';
import User from 'src/app/interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  id: string;
  photoURL: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;

  constructor() { }

  userDataLogin(user: User){
    console.log(user);
    this.id= user.id;
    this.photoURL= user.photoURL;
    this.name= user.name;
    this.lastName= user.lastName;
    this.email= user.email;
    this.password= user.password;
    this.birthday= user.birthday;
    this.gender= user.gender;
  }

}
