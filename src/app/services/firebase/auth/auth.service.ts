import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
  ) { }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  };

  login({ email, password }: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  recoverPassword({ email }: any){
    return sendPasswordResetEmail(this.auth, email);
  }

  checkMailAuth(){
    return sendEmailVerification(this.auth.currentUser);
  };

  logout(){
    return signOut(this.auth);
  };

  loginWinthGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  };

}
