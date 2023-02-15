import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }

  getItem(){
    return JSON.parse(localStorage.getItem('DETAIL'));
  }

  postItem( user ){
    localStorage.setItem('DETAIL', JSON.stringify(user));
  }

}
