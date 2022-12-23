import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, getDoc, setDoc } from '@angular/fire/firestore';

import User from 'src/app/interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  async addUser(user: User) {
    const usersRef = collection(this.firestore, 'users');
    const docRef = doc(this.firestore, 'users', `${user.email.toString()}`);
    const docSnap = await getDoc(docRef);
    if (!(docSnap.exists())) {
      await setDoc(doc(usersRef, `${user.email.toString()}`), {
        photoURL: user.photoURL,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
        gender: user.gender,
      });
    }
  }
}
